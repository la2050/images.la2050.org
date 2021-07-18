# Images for the My LA2050 Grants Challenge

This is a repository of images used on the [Grants Challenge](https://challenge.la2050.org/) and [Ideas Archive](https://archive.la2050.org/) websites.

https://images.la2050.org

The folders in this repository are named to match the URLs for each proposal on the challenge website. The files are named after their original URL. For example:

The URL for _Yes We Can World Foundation_ is:  
https://challenge.la2050.org/2019/learn/yes-we-can-world-foundation/

And the image URL is:  
https://images.la2050.org/challenge/2019/learn/2048-wide/yes-we-can-world-foundation.jpg

## Deployment status

[![Netlify Status](https://api.netlify.com/api/v1/badges/decd94cf-2950-40df-886c-da6ff36e6605/deploy-status)](https://app.netlify.com/sites/images-la2050/deploys)

## How to make changes

The files in the repository are stored and published by [Netlify](https://www.netlify.com/), using the [Large Media](https://docs.netlify.com/large-media/overview/) feature. To obtain and make changes to the files, you’ll need access to LA2050’s Netlify account. You will also need to set up [Git LFS](https://git-lfs.github.com/) and the [Netlify CLI](https://docs.netlify.com/large-media/setup/) tool.

### The basic steps are:

1. Clone this repository
2. Install [Git LFS](https://git-lfs.github.com/)
3. Sign in to Netlify using the [Netlify CLI](https://docs.netlify.com/large-media/setup/)
4. Pull, commit and push to the repository as you would normally.

### Netlify Large Media
https://docs.netlify.com/large-media/setup/

### Git LFS
https://git-lfs.github.com/

### Example setup
https://github.com/jimthoburn/netlify-lfs-example/blob/master/README.md

## Generating image sizes

1. Install ImageMagick
https://imagemagick.org

2. Install ImageOptim  
https://imageoptim.com

3. Install Node JS
https://nodejs.org

4. Install dependencies
```
npm install
```

5. Choose images

Choose which folders of images you want to create by editing _config.json_

```
"albums": [
  "public/challenge/2022/connect",
  "public/challenge/2022/create",
  "public/challenge/2022/learn",
  "public/challenge/2022/live",
  "public/challenge/2022/play"
]
```

7. Create a folder named “original” in each category, and add your new images to it:
```
public/challenge/2022/connect/original/my-new-image.jpg
public/challenge/2022/connect/original/my-other-new-image.png
public/challenge/2022/create/original/yet-other-new-image.jpg
...
```

6. Generate

```
npm run create
```
