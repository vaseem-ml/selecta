export const LOG_IN: string = "LOG_IN";
export const LOG_OUT: string = "LOG_OUT";

export function login(username: string) {
    return {type: LOG_IN, username: username };
}

export function logout() {
    return { type: LOG_OUT }
}