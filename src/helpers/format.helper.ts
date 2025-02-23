export default class Formatter {
    static date(dateStr: string | undefined): string {
        if (!dateStr || dateStr === '0001-01-01T00:00:00') return 'Chưa cập nhật';
        const date = new Date(dateStr);
        return date.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    static paramNumber(param: string | null | undefined, fallback: number): number {
        if (!param) return fallback;
        return Number.isNaN(Number(param)) ? fallback : Number(param);
    }

    static paramStr(param: string | null | undefined, fallback: string): string {
        if (!param) return fallback;
        return param;
    }

    static paramSearch(param: string | null | undefined): string {
        if (!param) return '';
        return decodeURIComponent(param || '');
    }
}
