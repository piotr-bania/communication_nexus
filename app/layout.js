import './globals.scss'

export const metadata = {
    title: 'Nexus: The Future of Communication',
    description: 'Step into Nexus, a groundbreaking contact platform where messages are sent through an immersive 3D interface. Crafted with cutting-edge technology, Nexus redefines digital interaction by blending the art of communication with the wonder of virtual experiences. Join the revolution and experience the future of connectivity.'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
