in case of having docker:
// make sure this project in strored on your wsl / ubuntu file system and not the window file system
// in case of wsl make sure your windows user have permissios for the project on the linux file system (from the project directory run: sudo chown -R $USER:$(id -gn $USER) ./* )
// make sure u have the vscode docker extention installed


// open command line and get into this project (if u are on vs code just click Ctrl+j)

//type: sudo docker-compose up --build -d --force-recreate
//open the browser on: http://localhost:5000/
//click Ctrl+shift+p
//copy and paste: remote-containers: attach to running container
//click the option: ts_playground
//go to src/index.ts
//you are welcome to enjoy your private ts playground :)
