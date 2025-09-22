'use client';

import { useState } from 'react';
import { Button, Card, CardBody, CardHeader } from '@heroui/react';
import { Camera, Smartphone, Monitor, Eye, RotateCcw, ZoomIn, Move } from 'lucide-react';
import { showARVRNotAvailable, showCameraPermissionDenied } from '@/utils/sweetAlert';

interface ARVRFeaturesProps {
  productName: string;
  arModelUrl?: string;
  vrModelUrl?: string;
}

export default function ARVRFeatures({ productName, arModelUrl, vrModelUrl }: ARVRFeaturesProps) {
  const [isARActive, setIsARActive] = useState(false);
  const [isVRActive, setIsVRActive] = useState(false);

  const handleARExperience = async () => {
    try {
      // ตรวจสอบการรองรับ AR
      if (!arModelUrl) {
        showARVRNotAvailable();
        return;
      }

      // ตรวจสอบการรองรับ WebXR
      if (!(navigator as Navigator & { xr?: unknown }).xr) {
        showARVRNotAvailable();
        return;
      }

      // ขออนุญาตใช้กล้อง
      await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      // เริ่ม AR Experience
      setIsARActive(true);
      
      // จำลองการโหลดโมเดล 3D
      setTimeout(() => {
        // ในแอปจริงจะมีการโหลดโมเดล 3D และแสดงผล AR
        console.log('AR Experience started for:', productName);
      }, 1000);

    } catch (error) {
      console.error('AR Error:', error);
      showCameraPermissionDenied();
    }
  };

  const handleVRExperience = async () => {
    try {
      // ตรวจสอบการรองรับ VR
      if (!vrModelUrl) {
        showARVRNotAvailable();
        return;
      }

      // ตรวจสอบการรองรับ WebXR
      if (!(navigator as Navigator & { xr?: unknown }).xr) {
        showARVRNotAvailable();
        return;
      }

      // เริ่ม VR Experience
      setIsVRActive(true);
      
      // จำลองการโหลดโมเดล 3D
      setTimeout(() => {
        // ในแอปจริงจะมีการโหลดโมเดล 3D และแสดงผล VR
        console.log('VR Experience started for:', productName);
      }, 1000);

    } catch (error) {
      console.error('VR Error:', error);
      showARVRNotAvailable();
    }
  };

  const stopExperience = () => {
    setIsARActive(false);
    setIsVRActive(false);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Eye className="w-5 h-5 text-purple-500" />
          <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            ลองสินค้าในห้องด้วย AR/VR
          </h3>
        </div>
      </CardHeader>
      
      <CardBody className="space-y-4">
        {!isARActive && !isVRActive ? (
          <div className="space-y-4">
            <p className="text-gray-600" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
              ลองดูสินค้าในพื้นที่จริงของคุณด้วยเทคโนโลยี AR/VR
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* AR Button */}
              <Button
                color="primary"
                variant="bordered"
                size="lg"
                onPress={handleARExperience}
                className="h-16 flex flex-col gap-2"
                startContent={<Camera className="w-6 h-6" />}
                style={{ fontFamily: 'var(--font-sukhumvit)' }}
              >
                <span>ลองด้วย AR</span>
                <span className="text-xs text-gray-500">ใช้กล้องโทรศัพท์</span>
              </Button>

              {/* VR Button */}
              <Button
                color="secondary"
                variant="bordered"
                size="lg"
                onPress={handleVRExperience}
                className="h-16 flex flex-col gap-2"
                startContent={<Monitor className="w-6 h-6" />}
                style={{ fontFamily: 'var(--font-sukhumvit)' }}
              >
                <span>ลองด้วย VR</span>
                <span className="text-xs text-gray-500">ใช้ VR Headset</span>
              </Button>
            </div>

            {/* Features List */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                ฟีเจอร์ที่คุณจะได้:
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                    หมุนสินค้าเพื่อดูทุกมุม
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <ZoomIn className="w-4 h-4" />
                  <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                    ขยาย/ย่อเพื่อดูรายละเอียด
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Move className="w-4 h-4" />
                  <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                    ย้ายตำแหน่งในพื้นที่จริง
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  <span style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                    ใช้งานง่ายด้วยมือถือ
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg p-6">
              <Eye className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                {isARActive ? 'AR Experience กำลังทำงาน' : 'VR Experience กำลังทำงาน'}
              </h4>
              <p className="text-sm opacity-90" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
                {isARActive 
                  ? 'ชี้กล้องไปที่พื้นผิวเรียบเพื่อวางสินค้า' 
                  : 'ใส่ VR Headset เพื่อเข้าไปในโลกเสมือน'
                }
              </p>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button
                color="danger"
                variant="bordered"
                onPress={stopExperience}
                style={{ fontFamily: 'var(--font-sukhumvit)' }}
              >
                หยุดการใช้งาน
              </Button>
            </div>
          </div>
        )}

        {/* Requirements */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2" style={{ fontFamily: 'var(--font-sukhumvit)' }}>
            ข้อกำหนดระบบ:
          </h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li style={{ fontFamily: 'var(--font-sukhumvit)' }}>
              • AR: กล้องโทรศัพท์ + เบราว์เซอร์ที่รองรับ WebXR
            </li>
            <li style={{ fontFamily: 'var(--font-sukhumvit)' }}>
              • VR: VR Headset (Oculus, HTC Vive, หรืออื่นๆ)
            </li>
            <li style={{ fontFamily: 'var(--font-sukhumvit)' }}>
              • การเชื่อมต่ออินเทอร์เน็ตที่เสถียร
            </li>
          </ul>
        </div>
      </CardBody>
    </Card>
  );
}
