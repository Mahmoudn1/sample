import subprocess

def download_video(url, output_filename, ffmpeg_path):
    try:
        command = [ffmpeg_path, "-i", url, "-c", "copy", "-bsf:a", "aac_adtstoasc", output_filename]
        subprocess.run(command, check=True)
        print(f"Video downloaded successfully as {output_filename}")
    except subprocess.CalledProcessError:
        print("An error occurred, please ensure ffmpeg is installed and the URL is correct.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

video_url = "https://d2jzdbr7dw66os.cloudfront.net/50fb74199cd4bb42810dd90fa5d81f34d95e736a63f5040983d32e6a61d7a094/master.m3u8?timestamp=1701907046"
output_file = "downloaded_video.mp4"
ffmpeg_path = r"C:\Users\fawzy\Downloads\ffmpeg-6.1-full_build\ffmpeg-6.1-full_build\bin\ffmpeg.exe"

download_video(video_url, output_file, ffmpeg_path)



###############################



import subprocess
import requests
import re


def download_video(url, output_filename, ffmpeg_path):
    try:
        # Download the master playlist
        response = requests.get(url)
        master_playlist = response.text

        # Regular expression to find stream URLs and their bandwidths
        stream_info = re.findall(r'BANDWIDTH=(\d+).*\n(.+\.m3u8)', master_playlist)

        # Select the stream with the highest bandwidth
        highest_quality_stream = max(stream_info, key=lambda x: int(x[0]))[1]

        # If the stream URL is relative, concatenate with the base URL
        if not highest_quality_stream.startswith("http"):
            base_url = url.rsplit("/", 1)[0]
            highest_quality_stream = f"{base_url}/{highest_quality_stream}"

        # Command to download the highest quality video
        command = [ffmpeg_path, "-i", highest_quality_stream, "-c", "copy", "-bsf:a", "aac_adtstoasc", output_filename]

        # Execute the command
        subprocess.run(command, check=True)
        print(f"Video downloaded successfully as {output_filename}")
    except subprocess.CalledProcessError:
        print("An error occurred, please ensure ffmpeg is installed and the URL is correct.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")


# URL of the video
video_url = "https://d2jzdbr7dw66os.cloudfront.net/50fb74199cd4bb42810dd90fa5d81f34d95e736a63f5040983d32e6a61d7a094/master.m3u8?timestamp=1701907046"

# Desired output filename
output_file = input("What do you want to name this lecture? ").strip().title()
output_file = re.sub(r'[\\/*?:"<>|]', '_', output_file)
if not output_file.endswith(".mp4"): output_file += ".mp4"

# Path to your ffmpeg executable
ffmpeg_path = r"C:\Users\fawzy\Downloads\ffmpeg-6.1-full_build\ffmpeg-6.1-full_build\bin\ffmpeg.exe"

# Download the video
download_video(video_url, output_file, ffmpeg_path)