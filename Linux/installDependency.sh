#!/bin/bash

REQ=$1

if [ $# != 1 ]; then
    echo "$0 requires 1 argument, $# given";
    echo "Usage: $0 FILE"
    exit 1;
fi

if [ ! -f "$REQ" ]; then
    echo "File '$REQ' doesn't exists"
    exit 1

else
	sed -e 's/dependencies =/ /gi' -e 's/[,]/\n/g' -e 's/[][{}":,[:blank:]]\+/ /g' $REQ > requirement.txt;

fi

PKG=""
NOPKG=""

while read -r pkg; do
	pip3 install $pkg;
	if [ $? -ne 0 ]; then
		NOPKG="$NOPKG $pkg";
	else
		PKG="$PKG $pkg";
	fi
done < requirement.txt


if [ "$NOPKG" = "" ]; then
	echo "success";
fi

if [ "$NOPKG" != "" ]; then
    echo "$NOPKG" >> NOPKG1.txt
    mv  NOPKG1.txt NOPKG.txt
    sed 's/ /\n/g' NOPKG.txt > print.txt
	while read -r pk; do
    if [ "$pk" != "" ]; then
		echo "Not installed packages: $pk";
    fi
		done < print.txt
fi


