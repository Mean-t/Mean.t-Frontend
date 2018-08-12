const _GotoMain = () => {
    window.location.href = "http://localhost:3000";
}

const _GotoLogin = () => {
    window.location.href = "http://localhost:3000/login"
}

const _GotoLookup = () => {
    window.location.href = "http://localhost:3000/lookup"
}

const _SendImage = () => {
    window.location.href = "http://localhost:3000/idea-send"
}

export { _GotoMain, _GotoLogin, _GotoLookup, _SendImage }