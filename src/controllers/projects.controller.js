const ProjectService = require('../services/projects.service');
const CommentService = require('../services/comments.service');
const TeamService = require('../services/teams.service');
const url = require('url');

class ProjectsController {
  projectService = new ProjectService();
  commentService = new CommentService();
  teamService = new TeamService();

  getProject = async (req, res) => {
    try {
      const { id } = req.params;
      let loginUserId = null;
      let loginUserNickname = null;

      if (res.locals.user) {
        const { id, nickname } = res.locals.user;
        loginUserId = id;
        loginUserNickname = nickname;
      } else {
        loginUserNickname = null;
      }

      const project = await this.projectService.findProjectById(id);
      const { comments } = await this.commentService.findCommentsByProjectId(
        id
      );
      const applyUsers = await this.teamService.findApplysByProjectId(id);
      const pageTitle = `project #${id}`;

      return res.render('projectDetail.html', {
        project,
        comments,
        loginUserId,
        loginUserNickname,
        applyUsers,
        pageTitle,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  updateProject = async (req, res) => {
    try {
      const { id } = req.params;
      const projectInfo = req.body;

      const updateProject = await this.projectService.updateProject(
        id,
        projectInfo
      );

      return res.status(200).json(updateProject);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  deleteProject = async (req, res) => {
    try {
      const { id } = req.params;

      const deleteProject = await this.projectService.deleteProject(id);

      return res.status(204).json(deleteProject);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  hardDeleteProject = (req, res) => {
    try {
      const { id } = req.params;
      this.projectService.hardDeleteProject(id);
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  //* /admin/projects 페이지 렌더링, 오프셋 기반 전체 프로젝트 조회 및 페이지네이션
  getOffsetBasedProjects = async (req, res) => {
    try {
      const { page } = req.query;
      const {
        pageInfo: { curPage, pageArr, prevPage, nextPage, totalPage },
        projects,
      } = await this.projectService.getOffsetBasedProjects(Number(page));

      return res.status(200).render('adminProjects', {
        curPage,
        pageArr,
        prevPage,
        nextPage,
        totalPage,
        projects,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  //* 프로젝트 조회 관련 페이지 렌더링
  renderProjectsPage = async (req, res) => {
    try {
      const { pathname } = url.parse(req.url);
      const { cursor, search } = req.query;
      const { nextCursor, page, projects, pageTitle } =
        await this.projectService.getCursorBasedProjects(
          pathname,
          cursor,
          search
        );
      return res
        .status(200)
        .render(page, { pageTitle, nextCursor, projects, search });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  //* 페이지별 커서 기반 전체 프로젝트 조회 및 페이지네이션
  getCursorBasedProjects = async (req, res) => {
    try {
      const { cursor, site, search } = req.query;
      const { nextCursor, projects } =
        await this.projectService.getCursorBasedProjects(site, cursor, search);
      return res.status(200).json({ nextCursor, projects });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  //* 프로젝트 생성
  createProject = async (req, res) => {
    try {
      await this.projectService.createProject(req.body);

      return res.sendStatus(201);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  //* 해당 유저의 프로젝트 보기
  getProjectByUser = async (req, res) => {
    try {
      const { id } = req.params;
      const findProjectByUser = await this.projectService.findProjectByUser(id);

      res.status(200).json(findProjectByUser);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

module.exports = ProjectsController;
