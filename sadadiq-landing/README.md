# صفحة هبوط تطبيق سدادق

## نظرة عامة
هذا المشروع يحتوي على صفحة هبوط (Landing Page) لتطبيق "سدادق" مصممة للنشر على Netlify.

## الملفات المتضمنة
- `index.html` - الصفحة الرئيسية
- `styles.css` - ملف التصميم والأنماط
- `script.js` - ملف JavaScript للتفاعل
- `privacy-policy.html` - صفحة سياسة الخصوصية
- `README.md` - هذا الملف

## كيفية النشر على Netlify

### الطريقة الأولى: السحب والإفلات (Drag & Drop)
1. اذهب إلى [netlify.com](https://netlify.com)
2. قم بإنشاء حساب أو تسجيل الدخول
3. اسحب مجلد المشروع بالكامل إلى منطقة "Deploy" في Netlify
4. انتظر حتى يكتمل النشر
5. ستحصل على رابط مجاني للموقع

### الطريقة الثانية: ربط مع Git Repository
1. ارفع الملفات إلى GitHub repository
2. في Netlify، اختر "New site from Git"
3. اربط حسابك مع GitHub
4. اختر المستودع (Repository)
5. اضغط "Deploy site"

## التخصيص

### تغيير روابط التحميل
في ملف `script.js`، ابحث عن هذا الجزء وقم بتحديث الروابط:

```javascript
if (isGooglePlay) {
    // استبدل هذا بالرابط الحقيقي لـ Google Play Store
    window.open('https://play.google.com/store/apps/details?id=com.sadadiq.app', '_blank');
} else if (isAppStore) {
    // استبدل هذا بالرابط الحقيقي لـ App Store
    window.open('https://apps.apple.com/app/sadadiq/id123456789', '_blank');
}
```

### تحديث معلومات الاتصال
في ملف `privacy-policy.html`، قم بتحديث معلومات الاتصال:
- البريد الإلكتروني
- رقم الهاتف

### إضافة الصور
يمكنك إضافة صور للتطبيق في مجلد `images/` وتحديث المراجع في HTML.

## الميزات
- تصميم متجاوب (Responsive Design)
- دعم كامل للغة العربية
- تحسين لمحركات البحث (SEO)
- تحميل سريع
- تفاعل سلس
- صفحة سياسة خصوصية منفصلة

## المتطلبات
لا توجد متطلبات خاصة - الموقع يعمل بـ HTML/CSS/JavaScript العادي.

## الدعم
للحصول على المساعدة، يرجى التواصل معنا على: support@sadadiq.com
