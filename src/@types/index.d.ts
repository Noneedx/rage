type callback = (...args: any[]) => void;

interface events {
    call: (name:string, ...args:any[]) => void,
    add: (name:string, callback: Function) => void,
    list: object,
}

declare global {
    interface Window {
        showLoginPage: any;
        closeLoginPage: any;
        createDialog: any;
        mp: mp;
        createNotify: any,
        activateProgressBar: any,
    }

    module '*.svg' {
        const path: string;
        export default path
    }

    interface mp {
        events: events,
        trigger: (name: string, ...args: any[]) => void,
    }
}

export {};

