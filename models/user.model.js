import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email address');
            }
        },
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"');
            }
            if (value.length < 7) {
                throw new Error('Password must be at least 7 characters long');
            }
        },
    },
    profileImage: {
        type: String,
        default:
            'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp'
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number');
            }
        },
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
}, {
    timestamps: true,
    strict: true,
});

userSchema.pre('save', async function () {
    if (this.isModified('password'))
        this.password = await hashPassword(this.password);
});

userSchema.methods.comparePassword = async function (candidate) {
    const { verifyPassword } = await import('../utiles/hash.js');
    return verifyPassword(candidate, this.password);
};

export default mongoose.model('User', userSchema);