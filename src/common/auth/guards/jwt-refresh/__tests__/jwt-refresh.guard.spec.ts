import { JWTRefreshGuard } from '../auth.jwt-refresh.guard';

describe('JWTRefreshGuard', () => {
    it('should be defined', () => {
        expect(new JWTRefreshGuard()).toBeDefined();
    });
});
