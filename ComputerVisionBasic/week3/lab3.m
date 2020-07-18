img=imread('cameraman.tif');
[Gx,Gy]=imgradientxy(img,'sobel');
%Uncomment the code below to visualize Gx and Gy 
imshowpair(Gx,Gy,'montage')
%[Gmag, Gdir] = imgradient(img,'prewitt');
[Gmag, Gdir] = imgradient(Gx,Gy);
%[Gx,Gy] = imgradientxy(I);
imshowpair(Gmag,Gdir,'montage')



