#!/bin/bash

# Loop through all files in the current directory
for file in *.css; do
  # Use sed to replace .css with .module.css
  mv "$file" "$(echo "$file" | sed 's/\.css$/.module.css/')"
done