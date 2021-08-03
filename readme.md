# ts playground of your own
### hey, so my little spoild brother is now learning Typsecript at school (in my time we learned about the bible), so i wanned to make it easy for him to do his H.W

side note - this porject is mainly for windows users running docker on WSL2
===========================================================================


in case of having docker:
1. make sure this project in strored on your wsl / ubuntu file system and not the window file system
2. in case of wsl make sure your windows user have permissios for the project on the linux file system
 (from the project directory run: sudo chown -R $USER:$(id -gn $USER) ./* )
3. make sure u have the vscode docker extention installed

in case of not having docker: 
go to udemy, install and learn docker, and spare yourself so much suffering :)


## installation
there is nothing to install

## how to run:
**0. clone/download
1. open command line and get into this project (if u are on vs code just click Ctrl+j)
2. type: sudo docker-compose up --build -d --force-recreate
3. open the browser on: http://localhost:5000/
4. click Ctrl+shift+p
5. copy and paste: remote-containers: attach to running container
6. click the option: ts_playground
7. go to src/index.ts
8. you are welcome to enjoy your private ts playground :)
