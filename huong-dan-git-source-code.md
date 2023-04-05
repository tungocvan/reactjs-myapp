1. Tạo cặp key
   ssh-keygen -t rsa -b 4096 -C "tungocvan@gmail.com"
   2.cat /root/.ssh/id_rsa.pub
   copy nội dung vào github: https://github.com/settings/keys

2. đẩy source code lên github:

3.1 trỏ đến kho githusb bằng ssh: (chỉ làm 1 lần)
git remote add origin git@github.com:tungocvan/reactjs-myapp.git
3.2:
git add .
git commit -m "reactjs-my-app-first"
git status
git branch -M main (chỉ làm 1 lần)
git push -u origin main

3.3 lần sau git souce code:
git add .
git commit -m "ghi chú"
git push
