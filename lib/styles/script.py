import os

def rename_files_in_directory(directory):
    # List all files and directories in the given directory
    for filename in os.listdir(directory):
        # Check if the file ends with '.css'
        if filename.endswith(".css"):
            # Create the new file name by replacing '.css' with '.module.css'
            new_filename = filename.replace(".css", ".module.css")
            # Construct the full old and new file paths
            old_file_path = os.path.join(directory, filename)
            new_file_path = os.path.join(directory, new_filename)
            # Rename the file
            os.rename(old_file_path, new_file_path)
            print(f'Renamed: {old_file_path} to {new_file_path}')

if __name__ == "__main__":
    # Specify the directory containing the x.css files
    directory_path = os.getcwd()  # Use the current working directory
    rename_files_in_directory(directory_path)