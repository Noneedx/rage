declare global {
    interface Window {
        showLoginPage: any;
        closeLoginPage: any;
        createDialog: any;
        mp: any;
        createNotify: any,
        activateProgressBar: any,
    }

    module '*.svg' {
        const path: string;
        export default path
    }
}

export {};

