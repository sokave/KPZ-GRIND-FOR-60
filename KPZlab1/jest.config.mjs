// jest.config.mjs
export default {
    testEnvironment: 'node',
    transform: {
        '^.+\\.m?[tj]s$': 'babel-jest'
    },
    testMatch: ['**/test/**/*.test.mjs']
};
