import Joi from "joi";
import Author from "../models/author";

const AuthorSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
});

export const getAll = async (req, res) => {
    const { _limit = 10, _sort = "createAt", _order = "asc", _page = 1 } = req.query;
    const options = {
        page: _page,
        limit: _limit,
        sort: {
            [_sort]: _order == "desc" ? -1 : 1,
        },
    };

    try {
        const data = await Author.paginate({}, options);

        if (data.length == 0) {
            return res.json({
                message: "Không có tác giả nào",
            });
        }
        return res.json(data);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const get = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Author.findOne({ _id: id });
        if (data.length === 0) {
            return res.status(200).json({
                message: "Không có tác giả",
            });
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = AuthorSchema.validate(body);
        if (error) {
            return res.json({
                message: error.details[0].message,
            });
        }
        const data = await Author.create(body);
        if (data.length === 0) {
            return res.status(400).json({
                message: "Thêm tác giả thất bại",
            });
        }
        return res.status(200).json({
            message: "Thêm tác giả thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const remove = async (req, res) => {
    try {
        const data = await Author.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xóa tác giả thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const update = async (req, res) => {
    try {
        const data = await Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (!data) {
            return res.status(400).json({
                message: "Cập nhật tác giả thất bại",
            });
        }
        return res.json({
            message: "Cập nhật tác giả thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
