import TinTucBanner from '../_components/banner';
import { NewsCategories } from '../_components/news-categories';
import { SubscribeForm } from '../_components/subscribe-form';
import { Breadcrumb } from '@/components/breadcrumb';
import React from 'react';

export const metadata = {
    title: 'Tin tức - SOPC',
    description: 'Cập nhật tin tức mới nhất về SOPC',
};

const rawHTML = {
    __html: `
    <section class="md:pt-5 pt-3 lg:pb-100px md:pb-20 pb-60px" style="font-size: 24px">
    <div class="container mx-auto">
                <div class=" mx-auto">
            <div class="w-full mb-10">
                <h1 class="font-medium text-primary md:text-40px text-[28px] text-left">
                    Tế bào nội mô giác mạc và những điều cần biết                </h1>
            </div>
            <div class="wysiwyg sm:text-base text-sm font-normal text-black">
                <p style="text-align: justify;">Tế bào nội mô gồm một lớp tế bào hình lục giác dẹt có nguồn gốc từ ngoại bì thần kinh. Lớp tế bào này không phân bào và tái sinh, vì thế khi có tổn hại vùng khuyết tế bào nội mô sẽ được bù đắp bằng cách tăng kích thước của các tế bào xung quanh.</p>
<p style="text-align: justify;">Có sự giảm tế bào nội mô theo tuổi tác, số lượng tế bào giảm khoảng 0.6% mỗi năm. Ở trẻ con mật độ tế bào nội mô khoảng 3.500 – 4000 tế bào/mm2, ở người trưởng thành còn khoảng 2500 tế bào /mm2.</p>
<div style="text-align: justify;">
<p>Tế bào nội mô có vai trò quan trọng trong cấu trúc và chức năng của giác mạc. Khi tế bào này bị tổn thương, mật độ tế bào giảm còn khoảng 800 tế bào/mm2, giác mạc sẽ bị phù mất tính trong suốt, gây chói sáng, mắt nhìn mờ giảm thị lực nghiêm trọng.</p>
<p><img fetchpriority="high" decoding="async" class="size-full wp-image-1261 aligncenter" src="http://matsaigon.com/wp-content/uploads/te-bao-noi-mo-1.jpg" alt="te-bao-noi-mo-1" width="359" height="270" srcset="https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-1.jpg 359w, https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-1-300x226.jpg 300w, https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-1-150x113.jpg 150w" sizes="(max-width: 359px) 100vw, 359px"></p>
</div>
<div style="text-align: justify;">
<h3>Một số bệnh lý giác mạc có liên quan tế bào nội mô giác mạc?</h3>
<h4>Loạn dưỡng giác mạc Fuchs΄</h4>
<p>Loạn dưỡng giác mạc Fuchs là bệnh thường xảy ra ở cả 2 mắt, bệnh tiến triển chậm, tỷ lệ nữ mắc bệnh thường cao hơn nam. Bệnh xảy ra khi các tế bào nội mô dần dần xấu đi, không rõ nguyên nhân, tế bào nội mô mất dần làm ảnh hưởng sự trao đổi nước của giác mạc, giác mạc lâu ngày thấm nước, phù gây giảm thị lực.</p>
<h4>Loạn dưỡng sau nội mô</h4>
<p>Loạn dưỡng sau nội mô hiếm gặp, thường ở 1 mắt, ít biểu hiện triệu chứng, tế bào nội mô giác mạc có các đặc tính tương tự như tổn thương ở biểu mô giác mạc. Bệnh có tính di truyền liên quan gen AD trên nhiễm sắc thể 20. Loạn dưỡng thường xảy ra sớm sau sinh.</p>
<p>Tế bào nội mô phù bọng tinh tế sau đó các tổn thương tiến triển dần thành sẹo mờ hình dải băng. Bệnh có thể kèm theo một số bất thường khác ở mắt như màng đồng tử, dính trước chu biên, lệch đồng tử, đa đồng tử, <a href="http://www.matsaigon.com/cuom-nuoc-glaucoma.html" target="_blank" rel="noopener noreferrer">glaucoma</a>, hội chứng nội mô giác mạc mống mắt…</p>
<p><img decoding="async" class="aligncenter wp-image-41081 size-full" src="https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-benh-vien-mat-sai-gon.jpg" alt="" width="400" height="222" srcset="https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-benh-vien-mat-sai-gon.jpg 400w, https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-benh-vien-mat-sai-gon-300x167.jpg 300w, https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-benh-vien-mat-sai-gon-150x83.jpg 150w" sizes="(max-width: 400px) 100vw, 400px"></p>
<h4>Loạn dưỡng nội mô giác mạc bẩm sinh</h4>
<p>Loạn dưỡng nội mô giác mạc bẩm sinh hiếm gặp, bệnh có tính di truyền liên quan gen AD trên nhiễm sắc thể 20p11, 20p13.&nbsp; Bệnh xảy ra ngay sau sinh, thường 2 mắt, giác mạc phù đục toàn bộ. Chỉ định <a href="http://www.matsaigon.com/phau-thuat-ghep-giac-mac" target="_blank" rel="noopener noreferrer">ghép giác mạc</a> phải thực hiện sớm mặc dù có thể có nhiều nguy cơ về nhiều mặt so với ghép giác mạc ở người lớn.</p>
<p>Ghép giác mạc chậm trễ sẽ có nguy cơ gây nhược thị cho trẻ. Loạn dưỡng giác mạc gây ảnh hưởng nhiều kiểu khác nhau đối với tầm nhìn, một số loạn dưỡng giác mạc gây ảnh hưởng thị lực trầm trọng phải ghép giác mạc.</p>
<h3>Vì sao phải đếm tế bào nội mô giác mạc?</h3>
<p>Khi giác mạc trong, độ dày giác mạc bình thường không nhất thiết có liên quan với hình thái tế bào nội mô giác mạc hay mật độ tế bào nội mô cũng sẽ bình thường. Trung bình mật độ tế bào nội mô là 2500 tế bào/mm2. Phù giác mạc có thể xảy ra nếu mật độ tế bào nội mô trước phẫu thuật khoảng 300-800 tế bào/ mm2.</p>
<p>Đánh giá tế bào nội mô giác mạc trong phẫu thuật nội nhãn là rất quan trọng vì số lượng tế bào nội mô có thể giảm trong quá trình phẫu thuật nội nhãn.</p>
<p>Xác định tế bào nội mô giác mạc đóng vai trò quan trọng trong phẫu thuật khúc xạ đặt kính tiền phòng (Phakic IOL), nếu mật độ tế bào nội mô giảm không nên can thiệp điều trị khúc xạ bằng phương pháp này.&nbsp; Nếu sau phẫu thuật Phakic IOL, mật độ tế bào nội mô bị giảm dần, cần đưa ra hướng theo dõi và điều trị kịp thời.</p>
<p><img decoding="async" class="size-full wp-image-1263 aligncenter" src="http://matsaigon.com/wp-content/uploads/te-bao-noi-mo-3.jpg" alt="te-bao-noi-mo-3" width="610" height="317" srcset="https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-3.jpg 610w, https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-3-300x156.jpg 300w, https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-3-150x78.jpg 150w" sizes="(max-width: 610px) 100vw, 610px"></p>
<p>Đồng thời số lượng tế bào nội mô giác mạc trong mảnh giác mạc ghép cũng rất quan trọng trong phẫu thuật ghép giác mạc. Đánh giá tế bào nội mô giác mạc giúp đánh giá tình trạng giác mạc, phân loại bệnh loạn dưỡng, thoái hóa giác mạc đặc biệt loạn dưỡng sau nội mô, loạn dưỡng giác mạc do lắng đọng hạt bất thường trên màng descemet…</p>
<p>Vai trò của xác định tình trạng tế bào nội mô giác mạc trước phẫu thuật là rất quan trọng. Điều này giúp thực hiện những biện pháp bảo vệ cần thiết, đảm bảo sự an toàn cho phẫu thuật và kết quả điều trị lâu dài.</p>
<h3>Ý nghĩa các chỉ số trong kết quả đếm tế bào nội mô:</h3>
<p><img loading="lazy" decoding="async" class="size-full wp-image-1264 aligncenter" src="http://matsaigon.com/wp-content/uploads/te-bao-noi-mo-4.jpg" alt="te-bao-noi-mo-4" width="620" height="482" srcset="https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-4.jpg 620w, https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-4-300x233.jpg 300w, https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-4-150x117.jpg 150w" sizes="(max-width: 620px) 100vw, 620px"></p>
<p>– CD/mm2(Cell Density): mật độ tế bào nội mô giác mạc trên 1mm2. Chỉ số này thay đổi theo tuổi bệnh nhân.</p>
<p>– CD &gt;2500 /mm2 là bình thường. Tối thiểu có thể chấp nhận &gt;1500/mm2. Giác mạc có thể phù nếu CD 800/mm2.</p>
<p>– C.V% (coefficient of variantion cell): biểu thị sự biến đổi kích thước giữa các tế bào nội mô. CV% &lt; 40 là bình thường.</p>
<p>– S.D (standard deviation of the mean cell area): độ lệch chuẩn của tế bào nội mô vùng khảo sát.</p>
<p>–&nbsp;HEXA% (Hexagonality): biểu hiện sự biến đổi hình dạng của tế bào lục giác (tế bào nội mô giác mạc). HEXA &gt; 50% là bình thường.</p>        <div class="container dat-lich-tu-van mx-auto py-6 max-w-947px">
            
        </div>
        <p></p>
<p>–&nbsp;Cornea Thick (mm) – PACHY: chiều dày giác mạc.</p>
<p>–&nbsp;NUM -Number of cells: số lượng tế bào vùng khảo sát.</p>
<p>–&nbsp;MIN (µm2) -Minium size: kích thước tế bào nhỏ nhất.</p>
<p>–&nbsp;MAX (µm2) -Maximum size: kích thước tế bào lớn nhất.</p>
<p>–&nbsp;AVE (µm2) -Average size: kích thước trung bình.</p>
<p>–&nbsp;6A% – percentage of 6 sides cell: tỷ lệ 6 mặt tế bào lục giác.</p>
<p><img loading="lazy" decoding="async" class="size-full wp-image-1265 aligncenter" src="http://matsaigon.com/wp-content/uploads/te-bao-noi-mo-5.jpg" alt="te-bao-noi-mo-5" width="291" height="206" srcset="https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-5.jpg 291w, https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-5-150x106.jpg 150w" sizes="(max-width: 291px) 100vw, 291px"></p>
<p>Khi đọc kết quả cần quan sát hình ảnh tế bào nội mô, bình thường kích thước các tế bào tương đối đồng đều nhau. Nếu kích thước tế bào to nhỏ khác nhau, hoặc có vùng khuyết mất tế bào là bất thường.</p>
<h3>Ghép nội mô giác mạc?</h3>
<p>Ghép giác mạc có 3 phương pháp: ghép giác mạc xuyên, ghép lớp trước sâu, ghép nội mô giác mạc.</p>
<p><img loading="lazy" decoding="async" class="size-full wp-image-1266 aligncenter" src="http://matsaigon.com/wp-content/uploads/te-bao-noi-mo-6.jpg" alt="te-bao-noi-mo-6" width="302" height="381" srcset="https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-6.jpg 302w, https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-6-238x300.jpg 238w, https://www.matsaigon.com/wp-content/uploads/te-bao-noi-mo-6-119x150.jpg 119w" sizes="(max-width: 302px) 100vw, 302px"></p>
<h4>Các phương pháp ghép giác mạc</h4>
<p>Ghép nội mô giác mạc là phương pháp ghép giác mạc chỉ thay thế duy nhất lớp trong cùng của giác mạc (lớp nội mô giác mạc). Có 2 cách ghép:</p>
<p>– DSAEK (Descemet Stripping Automated Endothelial Keratoplasty)</p>
<p>– DMEK (Descemet Membrane Endothelial Keratoplasty)</p>
</div>
<div>
<p style="text-align: justify;">DASEK: là phương pháp ghép 1 phần giác mạc trong cùng bao gồm loại bỏ màng descemet và lớp nội mô của bệnh nhân qua vết rạch đường hầm nhỏ trên củng mạc. Sau đó ghép vào lớp giác mạc dày khoảng 100 – 200µm của giác mạc người cho, lớp giác mạc cho ghép vào bao gồm lớp nội mô và một phần nhu mô giác mạc. Bóng hơi bơm vào tiền phòng ép vào mảnh ghép giúp hỗ trợ sự gắn dính của mảnh ghép vào giác mạc bệnh nhân.</p>
<p style="text-align: justify;">DMEK: tương tự như phương pháp DSAK nhưng mảnh ghép giác mạc cho vào thay thế chỉ dày khoảng 10-15µm, không bao gồm lớp nhu mô giác mạc.</p>
<h4 style="text-align: justify;">Ưu điểm ghép nội mô giác mạc</h4>
<p style="text-align: justify;">Ghép nội mô giác mạc là phương pháp ghép giác mạc có nhiều ưu điểm giúp bệnh nhân rút ngắn thời gian điều trị, phục hồi tốt thị lực. Là phương pháp ghép giác mạc không có vết khâu trên giác mạc nên tránh được các biến chứng liên quan đến vết chỉ khâu trên giác mạc, đồng thời ít gây loạn thị giác mạc, phục hồi thị lực nhanh sau phẫu thuật.</p>
<p style="text-align: justify;">Ít gây thay đổi độ cong giác mạc, độ loạn thị thấp sau phẫu thuật ghép giúp việc lựa chọn công suất kính nội nhãn dễ dàng hơn nếu có dự định phẫu thuật thủy tinh thể sau đó. Nguy cơ thải ghép thấp hơn các phương pháp ghép giác mạc khác.</p>
<h4 style="text-align: justify;">Ai cần ghép nội mô giác mạc</h4>
<p style="text-align: justify;">Chỉ định ghép nội mô giác mạc khi giác mạc phù gây ảnh hưởng thị lực trong những trường hợp: loạn dưỡng nội mô giác mạc (loạn dưỡng Fuchs, loạn dưỡng sau nội mô…), bệnh giác mạc bọng, hội chứng nội mô giác mạc mống mắt, tế bào nội mô bị thương tổn sau phẫu thuật nội nhãn, phẫu thuật ghép giác mạc trước đó hay các nguyên nhân khác gây rối loạn tế bào nội mô giác mạc …</p>
<p style="text-align: right;"><a href="http://www.matsaigon.com/" target="_blank" rel="noopener noreferrer">Bệnh viện Mắt Sài Gòn</a></p>
<p style="text-align: right;">Bác sĩ Chuyên khoa II. Đặng Đức Khánh Tiên</p>
</div>
            </div>
            <div class="mt-10">
                        <p class="pb-14px fieldstyle text-base text-black font-medium leading-tight">Chia sẻ:</p> 
        <ul class="flex flex-wrap space-x-2">
            <li class="">
                <a role="button" class="duration-200 inline-flex justify-center items-center rounded-full overflow-hidden bg-primary hover:bg-secondary w-8 h-8 jsCopyClipboard" href="https://www.matsaigon.com/a-z/te-bao-noi-mo-giac-mac/">
                    <svg class="max-w-[90%] max-h-[90%] object-contain" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1647 1.68118C12.8 1.53018 12.4092 1.45251 12.0145 1.4526C11.6198 1.45269 11.229 1.53055 10.8644 1.68172C10.4998 1.83289 10.1685 2.05442 9.88956 2.33364L8.23685 3.98635C7.97609 4.2471 7.55332 4.2471 7.29257 3.98635C7.03181 3.72559 7.03181 3.30282 7.29257 3.04207L8.94484 1.3898C8.94477 1.38987 8.94491 1.38973 8.94484 1.3898C9.34774 0.986581 9.82635 0.666457 10.3529 0.448138C10.8795 0.229779 11.444 0.11732 12.0142 0.117188C12.5843 0.117055 13.1488 0.22925 13.6756 0.447364C14.2023 0.665478 14.6809 0.985236 15.0841 1.38837C15.4872 1.79151 15.807 2.27012 16.0251 2.79686C16.2432 3.32361 16.3554 3.88817 16.3553 4.45829C16.3551 5.02841 16.2427 5.59291 16.0243 6.11956C15.806 6.64611 15.4861 7.12449 15.0829 7.5274C15.0828 7.52747 15.0829 7.52732 15.0829 7.5274L12.7222 9.88809C12.3192 10.2911 11.8407 10.6108 11.3141 10.8289C10.7876 11.047 10.2232 11.1593 9.65327 11.1593C9.08332 11.1593 8.51895 11.047 7.99239 10.8289C7.46582 10.6108 6.98738 10.2911 6.58436 9.88809C6.32361 9.62734 6.32361 9.20457 6.58436 8.94382C6.84512 8.68306 7.26788 8.68306 7.52864 8.94382C7.80765 9.22283 8.13888 9.44415 8.50343 9.59515C8.86797 9.74615 9.25869 9.82386 9.65327 9.82386C10.0478 9.82386 10.4386 9.74615 10.8031 9.59515C11.1677 9.44415 11.4989 9.22283 11.7779 8.94382L14.1386 6.58312C14.4178 6.30415 14.6396 5.97269 14.7907 5.60809C14.9419 5.24349 15.0198 4.85268 15.0199 4.45798C15.0199 4.06328 14.9423 3.67243 14.7913 3.30776C14.6403 2.94309 14.4189 2.61174 14.1398 2.33265C13.8607 2.05356 13.5294 1.83219 13.1647 1.68118Z" fill="white"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.82016 6.64791C6.42558 6.64791 6.03487 6.72563 5.67032 6.87663C5.30578 7.02763 4.97454 7.24895 4.69553 7.52796L2.33484 9.88866C2.05561 10.1676 1.83387 10.4991 1.6827 10.8637C1.53152 11.2283 1.45367 11.6191 1.45358 12.0138C1.45348 12.4085 1.53116 12.7993 1.68216 13.164C1.83316 13.5287 2.05453 13.86 2.33363 14.1391C2.61272 14.4182 2.94407 14.6396 3.30874 14.7906C3.67341 14.9416 4.06426 15.0193 4.45895 15.0192C4.85365 15.0191 5.24446 14.9412 5.60907 14.7901C5.97366 14.6389 6.30491 14.4174 6.58387 14.1381L8.23658 12.4854C8.49734 12.2247 8.9201 12.2247 9.18086 12.4854C9.44162 12.7462 9.44162 13.169 9.18086 13.4297L7.52859 15.082C7.52852 15.0821 7.52867 15.0819 7.52859 15.082C7.12569 15.4852 6.64709 15.8053 6.12054 16.0236C5.59389 16.242 5.02938 16.3545 4.45927 16.3546C3.88915 16.3547 3.32459 16.2425 2.79784 16.0244C2.27109 15.8063 1.79248 15.4865 1.38935 15.0834C0.986212 14.6803 0.666454 14.2017 0.448341 13.6749C0.230227 13.1482 0.118031 12.5836 0.118164 12.0135C0.118297 11.4434 0.230755 10.8789 0.449114 10.3522C0.667433 9.82567 0.987338 9.34728 1.39056 8.94438C1.39048 8.94446 1.39063 8.94431 1.39056 8.94438L3.75125 6.58368C4.15427 6.18067 4.63272 5.86098 5.15928 5.64287C5.68585 5.42476 6.25021 5.3125 6.82016 5.3125C7.39011 5.3125 7.95448 5.42476 8.48104 5.64287C9.00761 5.86098 9.48606 6.18067 9.88907 6.58368C10.1498 6.84444 10.1498 7.26721 9.88907 7.52796C9.62832 7.78872 9.20555 7.78872 8.94479 7.52796C8.66578 7.24895 8.33455 7.02763 7.97 6.87663C7.60546 6.72563 7.21474 6.64791 6.82016 6.64791Z" fill="white"></path>
                    </svg>
                </a>
            </li>
            <li class="">
                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://www.matsaigon.com/a-z/te-bao-noi-mo-giac-mac/" class="duration-200 inline-flex justify-center items-center rounded-full overflow-hidden bg-primary hover:bg-secondary w-8 h-8" role="button">
                    <svg class="max-w-[90%] max-h-[90%] object-contain" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.0822 13.5657H2.1721V7.36644H0.717773V4.9775H2.1721V3.54443C2.1721 1.59694 2.99315 0.4375 5.32604 0.4375H7.26805V2.82644H6.05466C5.14625 2.82644 5.08584 3.1599 5.08584 3.78303L5.0822 4.9775H7.28188L7.0242 7.36644H5.0822V13.5657Z" fill="white"></path>
                    </svg>
                </a>
            </li>
            <li class="">
                <a target="_blank" href="https://www.linkedin.com/shareArticle?url=https://www.matsaigon.com/a-z/te-bao-noi-mo-giac-mac/" class="duration-200 inline-flex justify-center items-center rounded-full overflow-hidden bg-primary hover:bg-secondary w-8 h-8" role="button">
                    <svg class="max-w-[90%] max-h-[90%] object-contain" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.82484 4.65625H0.442383V12.3292H2.82484V4.65625ZM3.01965 2.22753C3.01965 1.46468 2.39968 0.84375 1.638 0.84375C0.87189 0.84375 0.256348 1.46468 0.256348 2.22753C0.256348 2.99039 0.87189 3.61132 1.638 3.61132C2.39968 3.61132 3.01965 2.99039 3.01965 2.22753ZM6.60239 4.65893H4.32621V12.3318H6.70424V8.5353C6.70424 7.53738 6.89023 6.56607 8.13017 6.56607C9.3524 6.56607 9.36569 7.71036 9.36569 8.60183V12.3318H11.7437V8.12726C11.7437 6.06046 11.2965 4.47266 8.88742 4.47266C7.72719 4.47266 6.95223 5.10689 6.63338 5.71008H6.60239V4.65893Z" fill="white"></path>
                    </svg>
                </a>
            </li>
        </ul>
                    </div>
        </div>
    </div>
</section>`,
};

function TinTucDetail() {
    const breadcrumb: BreadcrumbItem[] = [
        {
            title: 'Trang chủ',
            link: '/',
        },
        {
            title: 'Tin tức',
            link: '/tin-tuc',
        },
        {
            title: 'Tập thể dục 10 phút mỗi ngày lợi như thế nào?',
            link: '/tin-tuc',
        },
    ];

    return (
        <div className="page-container height-minus">
            <TinTucBanner />

            <div className="app-padding mt-5 laptop:mt-10">
                <Breadcrumb values={breadcrumb} />

                <div className="grid laptop:grid-cols-4 gap-6 laptop:gap-8 mt-6 laptop:mt-10">
                    {/* Left Sidebar */}
                    <div className="space-y-6">
                        <NewsCategories />
                        <SubscribeForm />
                    </div>

                    <div className="laptop:col-span-3">
                        <div className="mb-4">
                            <span className="text-app-primary-blue font-medium">LỐI SỐNG 3T</span>
                            <h3 className="font-bold text-2xl mt-1">Tập thể dục 10 phút mỗi ngày lợi như thế nào?</h3>
                            <hr className="my-2 border-gray-300" />
                            <p className="text-gray-700 font-semibold italic text-sm mt-1">20.08.2024</p>
                            <div dangerouslySetInnerHTML={rawHTML} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TinTucDetail;
