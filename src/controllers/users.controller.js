const UserService = require('../services/users.service');

class UsersController {
  userService = new UserService();

  //* 백오피스 회원관리 페이지 렌더링
  renderAdminUserPage = (req, res) => {
    return res.status(200).render('adminUser');
  };

  //* 회원 전체 조회
  getAllUserInfo = async (req, res) => {
    try {
      const findAllUserInfo = await this.userService.findAllUserInfo();

      res.status(200).json(findAllUserInfo);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
}

module.exports = UsersController;
