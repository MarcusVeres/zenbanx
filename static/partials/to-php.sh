for i in *
do

    echo "file: $i"

    filename=$(basename "$i")
    extension="${i##*.}"
    pure=$(basename "${i%.*}")

    mv "$i" "$pure.php"

done

