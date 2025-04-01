#!/bin/bash

# Loop through all .avi files in the current directory
for file in *.avi; do
  # Extract the filename without the extension
  filename="${file%.*}"
  
  # Get the original resolution
  resolution=$(ffmpeg -i "$file" 2>&1 | grep -oP '(?<=, )\d+x\d+' | head -1)
  
  # Extract the width and height
  width=$(echo $resolution | cut -d'x' -f1)
  height=$(echo $resolution | cut -d'x' -f2)
  
  # Double the resolution
  new_width=$((width * 2))
  new_height=$((height * 2))
  
  # Convert the .avi file to .mp4 with doubled resolution
  ffmpeg -i "$file" -vf "scale=$new_width:$new_height" "${filename}.mp4"
done
