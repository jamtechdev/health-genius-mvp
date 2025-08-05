import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

const {
    Link,
    redirect,
    usePathname,
    useRouter,
    getPathname,
    push

} = createNavigation(routing);

export {
    Link,
    redirect,
    usePathname,
    useRouter,
    getPathname,
    push
};
