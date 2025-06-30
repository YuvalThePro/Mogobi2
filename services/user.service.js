import User from '../models/user.model.js';

export const createUser = data => User.create(data);
export const getAllUsers = () => User.find().select('-password');
export const getUserById = id => User.findById(id).select('-password');
export const findUserByEmail = email => User.findOne({ email }).select('+password');
export const updateUser = (id, updates) =>
  User.findByIdAndUpdate(id, updates, { new: true, runValidators: true })
      .select('-password');
export const deleteUser = id => User.findByIdAndDelete(id);