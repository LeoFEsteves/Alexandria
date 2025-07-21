export const Routes = {
    books: '/(tabs)/books/books',
    addBooks: '/(tabs)/books/addBooks',
    analytics: '/(tabs)/analytics'
} as const;

export type RoutePaths = typeof Routes[keyof typeof Routes];