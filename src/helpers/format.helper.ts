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
}
