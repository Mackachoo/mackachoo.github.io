
import { publish } from 'gh-pages';

publish(
    '.svelte-kit/output', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Mackachooo/mackachoo.github.io.git',
        user: {
            name: 'Dan',
            email: 'Mackachooo@gmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);