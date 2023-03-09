class CommentRepository {
  constructor(CommentModel) {
    this.commentModel = CommentModel;
  }

  createComment = async (id, userId, content) => {
    try {
      await this.commentModel.create({
        content,
        userId,
        projectId: id,
      });
      return { message: '댓글 작성 성공!' };
    } catch (error) {
      throw error;
    }
  };

  findCommentsByProjectId = async (id) => {
    try {
      return await this.commentModel.findAll({
        where: { projectId: id },
      });
    } catch (error) {
      throw error;
    }
  };

  updateComment = async (commentId, content, projectId) => {
    try {
      await this.commentModel.update(content, {
        where: { id: commentId, projectId },
      });
      return { message: '댓글 수정 성공!' };
    } catch (error) {
      throw error;
    }
  };

  deleteComment = async (projectId, commentId) => {
    try {
      return await this.commentModel.destroy({
        where: { id: commentId, projectId },
      });
    } catch (error) {
      throw error;
    }
  };
}

module.exports = CommentRepository;
