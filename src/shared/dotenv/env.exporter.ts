import dotenv from 'dotenv';
dotenv.config();
export const Env = {
    git_id: process.env.GITHUB_CLIENT_ID,
    git_url: process.env.GITHUB_CLIENT_SECRET,
    git_secrete: process.env.GITHUB_CLIENT_SECRET,
    port: process.env.PORT,
    git_callback_url:process.env.GITHUB_CALLBACK_URL
}
