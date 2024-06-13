const html = (book, data, userInformation) => `<!--
* This email was built using Tabular.
* For more information, visit https://tabular.email
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
img,p{margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-.56px;direction:ltr;color:#333;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px}h1{margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:41px;font-weight:800;font-style:normal;font-size:39px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px}h2{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:400;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h3{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (min-width: 481px) {
h1,img,p{margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;text-align:center}.t102,.t111,.t5,.t69{width:500px!important}img,p{line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-.56px;direction:ltr;color:#333;mso-line-height-rule:exactly;mso-text-raise:2px}h1{line-height:41px;font-weight:800;font-style:normal;font-size:39px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;mso-line-height-rule:exactly;mso-text-raise:1px}h2,h3{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;font-weight:400;font-style:normal;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h2{line-height:30px;font-size:24px}h3{line-height:26px;font-size:20px}.t68{mso-line-height-alt:45px!important;line-height:45px!important;display:block!important}.t69{padding-left:50px!important;padding-bottom:60px!important;padding-right:50px!important}.t5{padding-bottom:15px!important}.t4{line-height:26px!important;font-size:24px!important;letter-spacing:-1.56px!important}.t111{padding:48px 50px!important}.t102{padding-bottom:44px!important}.t100,.t76,.t82,.t88,.t94{width:8.8%!important}.t1,.t105,.t109,.t11,.t14,.t8{width:500px!important}.t33{width:460px!important}.t17,.t21,.t25{padding-left:10px!important;width:430px!important}.t66{width:420px!important}.t51{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t52,.t64{width:50%!important}.t49{padding-bottom:0!important;padding-right:5px!important}.t62{padding-left:5px!important}.t37,.t41,.t45,.t47,.t54,.t58,.t60{width:205px!important}
}
</style>
<style type="text/css" media="screen and (min-width:481px)">.moz-text-html img,.moz-text-html p{margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-.56px;direction:ltr;color:#333;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px}.moz-text-html h1{margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:41px;font-weight:800;font-style:normal;font-size:39px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px}.moz-text-html h2{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:400;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}.moz-text-html h3{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}.moz-text-html .t68{mso-line-height-alt:45px!important;line-height:45px!important;display:block!important}.moz-text-html .t69{padding-left:50px!important;padding-bottom:60px!important;padding-right:50px!important;width:500px!important}.moz-text-html .t5{padding-bottom:15px!important;width:500px!important}.moz-text-html .t4{line-height:26px!important;font-size:24px!important;letter-spacing:-1.56px!important}.moz-text-html .t111{padding:48px 50px!important;width:500px!important}.moz-text-html .t102{padding-bottom:44px!important;width:500px!important}.moz-text-html .t100,.moz-text-html .t76,.moz-text-html .t82,.moz-text-html .t88,.moz-text-html .t94{width:8.8%!important}.moz-text-html .t105,.moz-text-html .t109{width:500px!important}.moz-text-html .t33{width:460px!important}.moz-text-html .t1,.moz-text-html .t11,.moz-text-html .t14,.moz-text-html .t8{width:500px!important}.moz-text-html .t21,.moz-text-html .t25{padding-left:10px!important;width:430px!important}.moz-text-html .t66{width:420px!important}.moz-text-html .t51{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.moz-text-html .t52{width:50%!important}.moz-text-html .t49{padding-bottom:0!important;padding-right:5px!important}.moz-text-html .t64{width:50%!important}.moz-text-html .t62{padding-left:5px!important}.moz-text-html .t17{padding-left:10px!important;width:430px!important}.moz-text-html .t37,.moz-text-html .t41,.moz-text-html .t45,.moz-text-html .t47,.moz-text-html .t54,.moz-text-html .t58,.moz-text-html .t60{width:205px!important}</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<style type="text/css">
img,p{margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-.56px;direction:ltr;color:#333;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px}h1{margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:41px;font-weight:800;font-style:normal;font-size:39px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px}h2{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:400;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}h3{margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;letter-spacing:0;direction:ltr;color:#333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px}div.t68{mso-line-height-alt:45px !important;line-height:45px !important;display:block !important}td.t69{padding-left:50px !important;padding-bottom:60px !important;padding-right:50px !important}td.t5{padding-bottom:15px !important}h1.t4{line-height:26px !important;font-size:24px !important;letter-spacing:-1.56px !important}td.t111{padding:48px 50px !important}td.t102{padding-bottom:44px !important}div.t100,div.t76,div.t82,div.t88,div.t94{width:8.8% !important}td.t21,td.t25{padding-left:10px !important}div.t51{mso-line-height-alt:0px !important;line-height:0 !important;display:none !important}div.t52{width:50% !important}td.t49{padding-bottom:0 !important;padding-right:5px !important}div.t64{width:50% !important}td.t62{padding-left:5px !important}td.t17{padding-left:10px !important}
</style>
<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t115" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class="t114" style="background-color:#242424;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t113" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#242424"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t68" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;&nbsp;</div></td></tr><tr><td>
<!--[if mso]>
<table class="t70" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t70" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t69" style="background-color:#F8F8F8;width:600px;padding:0 30px 40px 30px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t69" style="background-color:#F8F8F8;width:420px;padding:0 30px 40px 30px;">
<!--<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td>
<!--[if mso]>
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t1" style="width:500px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t1" style="width:420px;">
<!--<![endif]-->
<div class="t0" style="display:inline-table;width:100%;text-align:right;vertical-align:top;">
<!--[if mso]>
<table role="presentation" cellpadding="0" cellspacing="0" align="right" valign="top"><tr>
</tr></table>
<![endif]-->
</div></td>
</tr></table>
</td></tr><tr><td><div class="t3" style="mso-line-height-rule:exactly;mso-line-height-alt:65px;line-height:65px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td>
<!--[if mso]>
<table class="t6" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t6" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t5" style="width:500px;padding:0 0 20px 0;">
<![endif]-->
<!--[if !mso]>-->
<td class="t5" style="width:420px;padding:0 0 20px 0;">
<!--<![endif]-->
<h1 class="t4" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:28px;font-weight:800;font-style:normal;font-size:26px;text-decoration:none;text-transform:none;letter-spacing:-1.04px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Hello ${userInformation.username},</h1></td>
</tr></table>
</td></tr><tr><td>
<!--[if mso]>
<table class="t9" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t9" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t8" style="width:500px;padding:0 0 22px 0;">
<![endif]-->
<!--[if !mso]>-->
<td class="t8" style="width:420px;padding:0 0 22px 0;">
<!--<![endif]-->
<p class="t7" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Cảm ơn bạn đã đặt hàng tại Luxuy Hotel chúng tôi!</p></td>
</tr></table>
</td></tr><tr><td>
<!--[if mso]>
<table class="t12" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t12" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t11" style="width:500px;padding:0 0 22px 0;">
<![endif]-->
<!--[if !mso]>-->
<td class="t11" style="width:420px;padding:0 0 22px 0;">
<!--<![endif]-->
<p class="t10" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Nếu có bất cứ thông tin thắc mắc nào đừng ngần ngại liên hệ cho chúng tôi.</p></td>
</tr></table>
</td></tr><tr><td>
<!--[if mso]>
<table class="t15" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t15" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t14" style="width:500px;padding:0 0 22px 0;">
<![endif]-->
<!--[if !mso]>-->
<td class="t14" style="width:420px;padding:0 0 22px 0;">
<!--<![endif]-->
<p class="t13" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Chúng tôi sẽ cố gắng phản hồi sớm nhất có thể.</p></td>
</tr></table>
</td></tr><tr><td>
<!--[if mso]>
<table class="t34" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t34" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t33" style="background-color:#F0F0F0;width:500px;padding:20px 20px 20px 20px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t33" style="background-color:#F0F0F0;width:380px;padding:20px 20px 20px 20px;">
<!--<![endif]-->
<div class="t32" style="display:inline-table;width:100%;text-align:left;vertical-align:middle;">
<!--[if mso]>
<table role="presentation" cellpadding="0" cellspacing="0" align="left" valign="middle" width="460"><tr><td class="t27" style="width:10px;" width="10"></td><td width="440" valign="middle"><![endif]-->
<div class="t31" style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:820px;"><div class="t30" style="padding:0 10px 0 10px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t29"><tr>
<td class="t28"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td>
<!--[if mso]>
<table class="t18" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t18" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t17" style="width:440px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t17" style="width:360px;">
<!--<![endif]-->
<h1 class="t16" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">THÔNG TIN ĐẶT PHÒNG</h1></td>
</tr></table>
</td></tr><tr><td><div class="t19" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td>
<!--[if mso]>
<table class="t22" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t22" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t21" style="width:440px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t21" style="width:360px;">
<!--<![endif]-->
<h1 class="t20" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">MÃ: #${book.id}</h1></td>
</tr></table>
</td></tr><tr><td><div class="t24" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td>
<!--[if mso]>
<table class="t26" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t26" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t25" style="border-top:1px solid #CCCCCC;width:440px;padding:15px 0 0 0;">
<![endif]-->
<!--[if !mso]>-->
<td class="t25" style="border-top:1px solid #CCCCCC;width:360px;padding:15px 0 0 0;">
<!--<![endif]-->
<h1 class="t23" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">TỔNG TIỀN: ${book.totalPrice}</h1></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</div></div>
<!--[if mso]>
</td><td class="t27" style="width:10px;" width="10"></td>
</tr></table>
<![endif]-->
</div></td>
</tr></table>
</td></tr><tr><td><div class="t35" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td>
<!--[if mso]>
<table class="t67" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t67" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t66" style="background-color:#F0F0F0;width:500px;padding:40px 40px 40px 40px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t66" style="background-color:#F0F0F0;width:340px;padding:40px 40px 40px 40px;">
<!--<![endif]-->
<div class="t65" style="display:inline-table;width:100%;text-align:left;vertical-align:top;">
<!--[if mso]>
<table role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top" width="420"><tr><td width="210" valign="top"><![endif]-->
<div class="t52" style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:800px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t50"><tr>
<td class="t49" style="padding:0 0 15px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td>
<!--[if mso]>
<table class="t48" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t48" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t47" style="width:205px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t47" style="width:800px;">
<!--<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td>
<!--[if mso]>
<table class="t38" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t38" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t37" style="width:205px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t37" style="width:600px;">
<!--<![endif]-->
<h1 class="t36" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">THÔNG TIN</h1></td>
</tr></table>
</td></tr><tr><td><div class="t39" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td>
<!--[if mso]>
<table class="t42" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t42" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t41" style="width:205px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t41" style="width:600px;">
<!--<![endif]-->
<p class="t40" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${userInformation.username}</p></td>
</tr></table>
</td></tr><tr><td>
<!--[if mso]>
<table class="t46" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t46" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t45" style="width:205px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t45" style="width:600px;">
<!--<![endif]-->
<p class="t44" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;"><span class="t43" style="margin:0;Margin:0;mso-line-height-rule:exactly;">${userInformation.phone} </span>Lane</p></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td></tr></table></td>
</tr></table>
<!--[if !mso]>-->
<div class="t51" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div>
<!--<![endif]-->
</div>
<!--[if mso]>
</td><td width="210" valign="top"><![endif]-->
<div class="t64" style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:800px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t63"><tr>
<td class="t62"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td>
<!--[if mso]>
<table class="t61" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t61" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t60" style="width:205px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t60" style="width:800px;">
<!--<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td>
<!--[if mso]>
<table class="t55" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t55" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t54" style="width:205px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t54" style="width:600px;">
<!--<![endif]-->
<h1 class="t53" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">PHƯƠNG THỨC THANH TOÁN</h1></td>
</tr></table>
</td></tr><tr><td><div class="t56" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td>
<!--[if mso]>
<table class="t59" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t59" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t58" style="width:205px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t58" style="width:600px;">
<!--<![endif]-->
<p class="t57" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${book.methodPay}</p></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</div>
<!--[if mso]>
</td>
</tr></table>
<![endif]-->
</div></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td></tr><tr><td>
<!--[if mso]>
<table class="t112" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t112" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t111" style="background-color:#242424;width:600px;padding:40px 30px 40px 30px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t111" style="background-color:#242424;width:420px;padding:40px 30px 40px 30px;">
<!--<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td>
<!--[if mso]>
<table class="t103" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t103" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t102" style="width:500px;padding:10px 0 36px 0;">
<![endif]-->
<!--[if !mso]>-->
<td class="t102" style="width:420px;padding:10px 0 36px 0;">
<!--<![endif]-->
<div class="t101" style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
<!--[if mso]>
<table role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top" width="220"><tr><td class="t72" style="width:10px;" width="10"></td><td width="24" valign="top"><![endif]-->
<div class="t76" style="display:inline-table;text-align:initial;vertical-align:inherit;width:10.47619%;max-width:44px;"><div class="t75" style="padding:0 10px 0 10px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t74"><tr>
<td class="t73"><div style="font-size:0px;"><img class="t71" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://f527e3cc-42ea-467b-983f-eee742bda74f.b-cdn.net/e/f6cfb3b4-c711-4a0e-9418-57243b5b924c/6b6c2d17-87ce-486d-a033-3ce351363964.png"/></div></td>
</tr></table>
</div></div>
<!--[if mso]>
</td><td class="t72" style="width:10px;" width="10"></td><td class="t78" style="width:10px;" width="10"></td><td width="24" valign="top"><![endif]-->
<div class="t82" style="display:inline-table;text-align:initial;vertical-align:inherit;width:10.47619%;max-width:44px;"><div class="t81" style="padding:0 10px 0 10px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t80"><tr>
<td class="t79"><div style="font-size:0px;"><img class="t77" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://f527e3cc-42ea-467b-983f-eee742bda74f.b-cdn.net/e/f6cfb3b4-c711-4a0e-9418-57243b5b924c/e82c522b-ef82-4f48-b65f-320d6c89482d.png"/></div></td>
</tr></table>
</div></div>
<!--[if mso]>
</td><td class="t78" style="width:10px;" width="10"></td><td class="t84" style="width:10px;" width="10"></td><td width="24" valign="top"><![endif]-->
<div class="t88" style="display:inline-table;text-align:initial;vertical-align:inherit;width:10.47619%;max-width:44px;"><div class="t87" style="padding:0 10px 0 10px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t86"><tr>
<td class="t85"><div style="font-size:0px;"><img class="t83" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://f527e3cc-42ea-467b-983f-eee742bda74f.b-cdn.net/e/f6cfb3b4-c711-4a0e-9418-57243b5b924c/4b2290a5-1ac5-4d54-a10d-3a47ab04e342.png"/></div></td>
</tr></table>
</div></div>
<!--[if mso]>
</td><td class="t84" style="width:10px;" width="10"></td><td class="t90" style="width:10px;" width="10"></td><td width="24" valign="top"><![endif]-->
<div class="t94" style="display:inline-table;text-align:initial;vertical-align:inherit;width:10.47619%;max-width:44px;"><div class="t93" style="padding:0 10px 0 10px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t92"><tr>
<td class="t91"><div style="font-size:0px;"><img class="t89" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://f527e3cc-42ea-467b-983f-eee742bda74f.b-cdn.net/e/f6cfb3b4-c711-4a0e-9418-57243b5b924c/c8d40bc9-57f0-4b07-87bf-80593ef79a28.png"/></div></td>
</tr></table>
</div></div>
<!--[if mso]>
</td><td class="t90" style="width:10px;" width="10"></td><td class="t96" style="width:10px;" width="10"></td><td width="24" valign="top"><![endif]-->
<div class="t100" style="display:inline-table;text-align:initial;vertical-align:inherit;width:10.47619%;max-width:44px;"><div class="t99" style="padding:0 10px 0 10px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t98"><tr>
<td class="t97"><div style="font-size:0px;"><img class="t95" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="https://f527e3cc-42ea-467b-983f-eee742bda74f.b-cdn.net/e/f6cfb3b4-c711-4a0e-9418-57243b5b924c/981feb3a-2512-4ffd-8d18-1c0ac05e09c0.png"/></div></td>
</tr></table>
</div></div>
<!--[if mso]>
</td><td class="t96" style="width:10px;" width="10"></td>
</tr></table>
<![endif]-->
</div></td>
</tr></table>
</td></tr><tr><td>
<!--[if mso]>
<table class="t106" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t106" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t105" style="width:500px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t105" style="width:420px;">
<!--<![endif]-->
<p class="t104" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">Đại học Nông Lâm thành phố Hồ Chí Minh</p></td>
</tr></table>
</td></tr><tr><td>
<!--[if mso]>
<table class="t110" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table class="t110" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<!--<![endif]-->
<tr>
<!--[if mso]>
<td class="t109" style="width:500px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t109" style="width:420px;">
<!--<![endif]-->
<p class="t108" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;"><a class="t107" href="https://tabular.email" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;" target="_blank">Hủy đăng ký</a>•&nbsp; Chính sách•&nbsp; Liên hệ</p></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td></tr></table></td></tr></table></div></body>
</html>`;
module.exports = { html };
