เริ่มด้วยการ npm i ก่อน และตรวจสอบให้แน่ใจว่า docker(ฐานข้อมูล) ทำการรันอยู่
Backend มีด้วยกัน 5 ส่วนหลักๆ คือ
1.server 2.routes 3.models 4.controllers 5.config  

1.server
![image](https://github.com/user-attachments/assets/f3cdc3ee-2ca8-4637-bf89-15abf48482be)  
มีหน้าที่ทำการ การรับข้อมูล JSON และแสดงข้อความ DB Connected! ถ้าสามารถเชื่อมต่อกับ Data base ได้แล้ว และแสดงข้อความ Server is running ที่ port ไหน  

2.routs  
![image](https://github.com/user-attachments/assets/04ff8685-7419-4488-8851-75e7412a7d3f)  
มีหน้าที่กำหนดเส้นทาง  

3.models มีด้วยกัน 2 ส่วน คือ  
3.1index  
![image](https://github.com/user-attachments/assets/751f2281-0007-4a66-9e1e-abcec6caa469)  
มีหน้าที่เชื่อมต่อกับฐานข้อมูล  
3.2Invoicpro.model  
![image](https://github.com/user-attachments/assets/83999599-88fc-4978-b103-a32611997bbd)  
มีหน้าที่สร้างตาราง หรือ กำหนดฟิว  

4.controllers  
![image](https://github.com/user-attachments/assets/c84f290e-47fb-4069-abf7-14a8bfb1f6c5)
![image](https://github.com/user-attachments/assets/6d99092f-51e0-4e5f-a96b-b02ac0dbc1ba)
![image](https://github.com/user-attachments/assets/d766c974-d030-4652-954f-9bd6bc0b31c3)
![image](https://github.com/user-attachments/assets/7005cc34-4035-4fec-83d3-9b9ca73686a3)
![image](https://github.com/user-attachments/assets/fa913ebb-0497-4ed9-b33b-4e17c6b4d62e)  
เป็นการกำหนดการทำงาน ว่า Creat หรือ Edit หรือ Delect หรือ การสั่งงานที่ทุกอย่างผ่าน id  

5.config  
![image](https://github.com/user-attachments/assets/9babbc1b-cf15-4fc5-94b1-a5d691715d52)  
เป็นการตั้งค่าการเชื่อมต่อ
เช่น Data base ชื่อ Invoicpro
password คือ 1234
dialect คือ postgres

























