#!/bin/sh
npm run build
rm -rf ../../osa3/notebackend/build
cp -r build ../../../puhelinluettelo_backend/
