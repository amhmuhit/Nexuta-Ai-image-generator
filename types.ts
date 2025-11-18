
export interface User {
  id: string;
  name: string;
  email: string;
  credits: number;
  role: 'user' | 'admin';
  isBlocked: boolean;
}

export interface CreditPackage {
  id: string;
  name: string;
  credits: number;
  price: number;
}

export interface PaymentSettings {
  methodName: string;
  accountNumber: string;
  qrCodeUrl: string;
}

export interface AppSettings {
  paymentDetails: PaymentSettings;
  creditPackages: CreditPackage[];
}

export interface PaymentRequest {
  id: string;
  userId: string;
  userEmail: string;
  packageId: string;
  packageName: string;
  trxId: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export interface GeneratedImage {
    id: string;
    prompt: string;
    url: string;
    createdAt: string;
}

export interface GenerationConfig {
    prompt: string;
    aspectRatio: '1:1' | '16:9' | '9:16' | '4:3' | '3:4';
    numberOfImages: number;
}