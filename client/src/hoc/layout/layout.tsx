import React from 'react';
const layout = <T extends object>(Component: React.ComponentType<T>) =>
    class Layout extends React.Component<T> {
        render() {
            return <main><h1>jesman</h1></main>
        }
    }

export default layout;