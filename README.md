<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=NoAFK&fontSize=90" />

<div align=center>
  <h1>📄프로젝트 설명</h1>
  <p>사이드 프로젝트 모집 사이트</p>
개발자로 성장하면서 접할 수 있는 
사이드 프로젝트를 플랫폼 내에서 
모두 관리 하는 것이 이번 프로젝트의 컨셉<br><br>

팀 노션 > https://radical-musician-f09.notion.site/c86b38a0f7a6408eb31c70c2803404ea<br>
배포 주소 > https://noafk.site/

</div>

<div align="center">
  <p><h1>📚기술 스택📚</h1></p>
  <p><h2>⭐ Platforms & Languages ⭐</h2></p>

  <p><h3> Front End </h3></p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
  <img src="https://img.shields.io/badge/Nunjucks-1C4913?style=for-the-badge&logo=Nunjucks&logoColor=white">
  <br>
  <p><h3> Back End </h3></p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white">
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=white">
  <img src="https://img.shields.io/badge/JSON Web Tokens-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=white">
  <img src="https://img.shields.io/badge/Passport-34E27A?style=for-the-badge&logo=Passport&logoColor=white">
  <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/multer-112233?style=for-the-badge">
  <img src="https://img.shields.io/badge/Nodemailer-22B573?style=for-the-badge">
  <br>
  <p><h2>☁️ AWS ☁️</h2></p>
	<img src="https://img.shields.io/badge/Amazon-EC2-FF9900?style=for-the-badge&logo=Amazon-EC2&4a154b=white" />
	<img src="https://img.shields.io/badge/Amazon-S3-569A31?style=for-the-badge&logo=Amazon-S3&4a154b=white" />
	<img src="https://img.shields.io/badge/Amazon-Lambda-FF9900?style=for-the-badge&logo=AWS-Lambda&4a154b=white" />
  <br>
	<img src="https://img.shields.io/badge/PM2-2B037A?style=for-the-badge&logo=PM2&4a154b=white" />
  <br>
  <p><h2>🛠️ Tools 🛠️</h2></p>
	<img src="https://img.shields.io/badge/slack-4a154b?style=for-the-badge&logo=slack&4a154b=white" />
	<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&4a154b=white" />
  <br>
	<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&181717=white" />
  <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white">
  <br>
	<img src="https://img.shields.io/badge/Visual Studio Code-007acc?style=for-the-badge&logo=Visual Studio Code&logoColor=white" />
  <br>
</div>
<br>

<div align=center><h1>👥 멤버</h1></div>
<a href="https://github.com/rsl150101/NoAFK/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=rsl150101/NoAFK" />
</a>

---

## ERD

<img src="https://cdn.discordapp.com/attachments/1088831499782082570/1088834797448724551/ERD.png">

## 아키텍쳐

### 서비스

<img src="https://cdn.discordapp.com/attachments/1088831499782082570/1088831561467711639/956b58987b4222b7.png" />

### 디렉토리 구조

```bash
📦NoAFK
┣ 📂src
┃ ┣ 📂config
┃ ┃ ┗ 📜config.js
┃ ┣ 📂controllers
┃ ┃ ┣ 📜api.controller.js
┃ ┃ ┣ 📜chats.controller.js
┃ ┃ ┣ 📜comments.controller.js
┃ ┃ ┣ 📜projects.controller.js
┃ ┃ ┣ 📜teams.controller.js
┃ ┃ ┗ 📜users.controller.js
┃ ┣ 📂middlewares
┃ ┃ ┣ 📜auth.js
┃ ┃ ┗ 📜uploads.js
┃ ┣ 📂migrations
┃ ┃ ┣ 📜20230228073808-create-user.js
┃ ┃ ┣ 📜20230228074008-create-project.js
┃ ┃ ┣ 📜20230228075312-create-chatting.js
┃ ┃ ┣ 📜20230228075356-create-comment.js
┃ ┃ ┗ 📜20230228075512-create-project-user.js
┃ ┣ 📂models
┃ ┃ ┣ 📜chatting.js
┃ ┃ ┣ 📜comment.js
┃ ┃ ┣ 📜index.js
┃ ┃ ┣ 📜project.js
┃ ┃ ┣ 📜projectUser.js
┃ ┃ ┗ 📜user.js
┃ ┣ 📂passport
┃ ┃ ┗ 📜index.js
┃ ┣ 📂repositories
┃ ┃ ┣ 📜chats.repository.js
┃ ┃ ┣ 📜comments.repository.js
┃ ┃ ┣ 📜projects.repository.js
┃ ┃ ┣ 📜teams.repository.js
┃ ┃ ┗ 📜users.repository.js
┃ ┣ 📂routes
┃ ┃ ┣ 📜admin.routes.js
┃ ┃ ┣ 📜api.routes.js
┃ ┃ ┣ 📜chat.routes.js
┃ ┃ ┣ 📜page.routes.js
┃ ┃ ┣ 📜projects.routes.js
┃ ┃ ┣ 📜teams.routes.js
┃ ┃ ┗ 📜users.routes.js
┃ ┣ 📂services
┃ ┃ ┣ 📜chats.service.js
┃ ┃ ┣ 📜comments.service.js
┃ ┃ ┣ 📜projects.service.js
┃ ┃ ┣ 📜teams.service.js
┃ ┃ ┗ 📜users.service.js
┃ ┣ 📂static
┃ ┃ ┣ 📂css
┃ ┃ ┃ ┣ 📂components
┃ ┃ ┃ ┃ ┣ 📜main-section-header.css
┃ ┃ ┃ ┃ ┣ 📜page-footer.css
┃ ┃ ┃ ┃ ┗ 📜page-header.css
┃ ┃ ┃ ┣ 📂config
┃ ┃ ┃ ┃ ┣ 📜reset.css
┃ ┃ ┃ ┃ ┗ 📜variables.css
┃ ┃ ┃ ┣ 📂fonts
┃ ┃ ┃ ┃ ┣ 📜Montserrat-VariableFont_wght.ttf
┃ ┃ ┃ ┃ ┣ 📜NotoSansKR-Bold.otf
┃ ┃ ┃ ┃ ┣ 📜NotoSansKR-Medium.otf
┃ ┃ ┃ ┃ ┗ 📜NotoSansKR-Regular.otf
┃ ┃ ┃ ┣ 📂screen
┃ ┃ ┃ ┃ ┣ 📜home-screen.css
┃ ┃ ┃ ┃ ┣ 📜projects-add-modal-screen.css
┃ ┃ ┃ ┃ ┗ 📜projects-screen.css
┃ ┃ ┃ ┣ 📜admin.css
┃ ┃ ┃ ┣ 📜allteam.css
┃ ┃ ┃ ┣ 📜login.css
┃ ┃ ┃ ┣ 📜members.css
┃ ┃ ┃ ┣ 📜mypage.css
┃ ┃ ┃ ┣ 📜myteam.css
┃ ┃ ┃ ┣ 📜projectDetail.css
┃ ┃ ┃ ┣ 📜style.css
┃ ┃ ┃ ┣ 📜teamChat.css
┃ ┃ ┃ ┗ 📜test.css
┃ ┃ ┣ 📂images
┃ ┃ ┃ ┣ 📜ad-img.png
┃ ┃ ┃ ┣ 📜banner.png
┃ ┃ ┃ ┣ 📜baseprofile.png
┃ ┃ ┃ ┣ 📜baseproject.png
┃ ┃ ┃ ┣ 📜favicon-16x16.png
┃ ┃ ┃ ┣ 📜favicon.ico
┃ ┃ ┃ ┣ 📜ico_selcet.svg
┃ ┃ ┃ ┣ 📜pavicon.png
┃ ┃ ┃ ┗ 📜sch_btn.png
┃ ┃ ┗ 📂js
┃ ┃ ┃ ┣ 📂admin
┃ ┃ ┃ ┃ ┗ 📜users.js
┃ ┃ ┃ ┣ 📂myteam
┃ ┃ ┃ ┃ ┣ 📜teamAddNew.js
┃ ┃ ┃ ┃ ┣ 📜teamChat.js
┃ ┃ ┃ ┃ ┣ 📜teamDelete.js
┃ ┃ ┃ ┃ ┣ 📜teamEditMember.js
┃ ┃ ┃ ┃ ┣ 📜teamEmit.js
┃ ┃ ┃ ┃ ┗ 📜teamUpdateStatus.js
┃ ┃ ┃ ┣ 📜adminProjectsSection.js
┃ ┃ ┃ ┣ 📜chatting.js
┃ ┃ ┃ ┣ 📜cookieSave.js
┃ ┃ ┃ ┣ 📜cursorPagination.js
┃ ┃ ┃ ┣ 📜join.js
┃ ┃ ┃ ┣ 📜login.js
┃ ┃ ┃ ┣ 📜mypage.js
┃ ┃ ┃ ┣ 📜projectAddModal.js
┃ ┃ ┃ ┣ 📜projectDetail.js
┃ ┃ ┃ ┣ 📜projectEditModal.js
┃ ┃ ┃ ┣ 📜projectsPagination.js
┃ ┃ ┃ ┣ 📜searchFormTrim.js
┃ ┃ ┃ ┣ 📜searchFormValidity.js
┃ ┃ ┃ ┣ 📜test.js
┃ ┃ ┃ ┗ 📜usersPagination.js
┃ ┣ 📂utility
┃ ┃ ┣ 📜ConvertCase.js
┃ ┃ ┣ 📜customError.js
┃ ┃ ┣ 📜joi.js
┃ ┃ ┣ 📜nodemailer.js
┃ ┃ ┗ 📜redis.js
┃ ┣ 📂views
┃ ┃ ┣ 📂admin
┃ ┃ ┃ ┗ 📜users.html
┃ ┃ ┣ 📂partials
┃ ┃ ┃ ┣ 📜page-footer.html
┃ ┃ ┃ ┣ 📜page-header.html
┃ ┃ ┃ ┗ 📜project-add-modal.html
┃ ┃ ┣ 📜adminProjects.html
┃ ┃ ┣ 📜allteam.html
┃ ┃ ┣ 📜base.html
┃ ┃ ┣ 📜chat.html
┃ ┃ ┣ 📜deletedTeam.html
┃ ┃ ┣ 📜home.html
┃ ┃ ┣ 📜join.html
┃ ┃ ┣ 📜login.html
┃ ┃ ┣ 📜loginIndex.html
┃ ┃ ┣ 📜members.html
┃ ┃ ┣ 📜mypage.html
┃ ┃ ┣ 📜myteam.html
┃ ┃ ┣ 📜projectDetail.html
┃ ┃ ┣ 📜projects.html
┃ ┃ ┗ 📜test.html
┃ ┣ 📜app.js
┃ ┗ 📜socket.js
┣ 📜.env
┣ 📜.gitignore
┣ 📜.prettierrc.js
┣ 📜.sequelizerc
┣ 📜package-lock.json
┣ 📜package.json
┗ 📜README.md
```

---

## 시작 가이드

### Requirements

For building and running the application you need:

- [Node.js 18.12.1](https://nodejs.org/en/blog/release/v18.12.1)

### Installation

```bash
$ git clone https://github.com/rsl150101/NoAFK.git
$ cd NoAFK
```

환경설정 구성 .env

```
MYSQL_AWS_USERNAME=
MYSQL_AWS_PASSWORD=
MYSQL_AWS_DATABASE=
MYSQL_AWS_HOST=
COOKIE_SECRET=

KAKAO_ID=
KAKAO_SECRET=
KAKAO_URL=http://localhost:3000/api/auth/kakao/callback

GOOGLE_ID=
GOOGLE_SECRET=
GOOGLE_URL=http://localhost:3000/api/auth/google/callback

GITHUB_ID=
GITHUB_SECRET=
GITHUB_URL=http://localhost:3000/api/auth/github/callback

NAVER_ID=
NAVER_SECRET=
NAVER_URL=http://localhost:3000/api/auth/naver/callback

S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=
BUCKET_NAME=

REDIS_HOST=
REDIS_PORT=
REDIS_USERNAME=
REDIS_PASSWORD=

GMAIL_ID=
GMAIL_PASSWORD=
```

```
$ npm install
$ npm run start
```

![Footer](https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=footer)
