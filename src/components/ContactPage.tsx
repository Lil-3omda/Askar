import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    الاسم: '',
    البريد_الإلكتروني: '',
    الرسالة: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ الاسم: '', البريد_الإلكتروني: '', الرسالة: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-4">اتصل بنا</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          نحن هنا لمساعدتك. تواصل معنا وسنرد عليك في أقرب وقت ممكن
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-lg shadow-lg h-full">
              <h2 className="text-2xl font-bold mb-6">معلومات التواصل</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">الهاتف</h3>
                    <p className="text-green-50">+966 50 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">البريد الإلكتروني</h3>
                    <p className="text-green-50">info@agripesticides.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">العنوان</h3>
                    <p className="text-green-50">
                      الرياض، المملكة العربية السعودية
                      <br />
                      طريق الملك فهد
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h3 className="font-bold mb-3">ساعات العمل</h3>
                <p className="text-green-50">السبت - الخميس: 8:00 ص - 5:00 م</p>
                <p className="text-green-50">الجمعة: مغلق</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-6">أرسل لنا رسالة</h2>

              {submitted ? (
                <div className="bg-green-50 border-r-4 border-green-600 p-6 rounded-lg text-center">
                  <div className="text-green-600 text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    شكرًا لتواصلك معنا!
                  </h3>
                  <p className="text-gray-600">
                    تم إرسال رسالتك بنجاح. سنتواصل معك قريبًا.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">الاسم</label>
                    <input
                      type="text"
                      name="الاسم"
                      value={formData.الاسم}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      name="البريد_الإلكتروني"
                      value={formData.البريد_الإلكتروني}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">الرسالة</label>
                    <textarea
                      name="الرسالة"
                      value={formData.الرسالة}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    إرسال الرسالة
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
