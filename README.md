# Images for the My LA2050 Grants Challenge

This is a repository of images used on the My LA2050 Grants Challenge.

https://images.la2050.org

The folders in this repository are named to match the URLs for each proposal on the challenge website. The files are named after their original URL, excluding the protocol (http). For example:

The URL for _Yes We Can World Foundation_ is:  
https://challenge.la2050.org/2019/learn/yes-we-can-world-foundation/

And the image URL is:  
https://images.la2050.org/challenge/assets/images/2019/learn/2048-wide/yes-we-can-world-foundation.jpg

## Deployment status

[![Netlify Status](https://api.netlify.com/api/v1/badges/decd94cf-2950-40df-886c-da6ff36e6605/deploy-status)](https://app.netlify.com/sites/images-la2050/deploys)

## How to make changes

The files in the repository are stored and published by [Netlify](https://www.netlify.com/), using the [Large Media](https://docs.netlify.com/large-media/overview/) feature. To obtain and make changes to the files, you’ll need access to LA2050’s Netlify account and you will also need to set up [Git LFS](https://git-lfs.github.com/) and the [Netlify CLI](https://docs.netlify.com/large-media/setup/) tool.

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

1. Install GraphicsMagick  
http://www.graphicsmagick.org

2. Install ImageOptim  
https://imageoptim.com

3. Install dependencies
```
npm install
```

4. Choose images

Choose which folder of images you want to optimize by editing _gulpfile.js_

```
sourceImagePath     = './challenge/2020/learn/original';
generatedImagePath  = './challenge/2020/learn';
```

5. Generate

```
npm run images:generate
```

6. Optimize

Open the new images in ImageOptim

