'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '@/context/authContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [openDesktopDialog, setOpenDesktopDialog] = useState(false);
  const [openMobileDialog, setOpenMobileDialog] = useState(false);

  const handleDemoClick = () => {
    if (loading) return;

    const isLargeScreen = window.innerWidth >= 768;

    if (isLargeScreen) {
      // ✅ Always show dialog on desktop
      setOpenDesktopDialog(true);
    } else {
      // ✅ Mobile behavior
      if (user) {
        router.push('/control');
      } else {
        setOpenMobileDialog(true);
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to PathPal</h1>
      <Button onClick={handleDemoClick} disabled={loading}>
        {loading ? 'Checking...' : 'Try Demo'}
      </Button>

      {/* Desktop Dialog */}
      <Dialog open={openDesktopDialog} onOpenChange={setOpenDesktopDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Not for This Device</DialogTitle>
            <DialogDescription>
            Please switch to Mobile/Tablet.
            </DialogDescription>
          </DialogHeader>
          
        </DialogContent>
      </Dialog>

      {/* Mobile Dialog */}
      <Dialog open={openMobileDialog} onOpenChange={setOpenMobileDialog}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Login Required</DialogTitle>
            <DialogDescription>
              Please sign in to access the mobile control feature.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4 gap-2">
            <Button variant="secondary" onClick={() => setOpenMobileDialog(false)}>Close</Button>
            <Button onClick={() => router.push('/login')} className='bg-[#546a47] text-white font-semibold cursor-pointer hover:bg-[#87b86d]'>Sign In</Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
