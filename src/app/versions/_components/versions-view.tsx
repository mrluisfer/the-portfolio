'use client';

import { Button } from '@/components/ui/button';
import { ChartNoAxesGantt, Grid3x3, LayoutGrid } from 'lucide-react';
import { useState } from 'react';
import VersionsCompact from './versions-compact';
import VersionsContent from './versions-content';
import VersionsTimeline from './versions-timeline';

type ViewType = 'detailed' | 'timeline' | 'compact';

export default function VersionsView() {
  const [view, setView] = useState<ViewType>('detailed');

  return (
    <div className="space-y-8">
      {/* View Switcher */}
      <div className="flex justify-center">
        <div className="bg-muted inline-flex rounded-lg border p-1">
          <Button
            variant={view === 'detailed' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setView('detailed')}
            className="gap-2"
          >
            <LayoutGrid className="h-4 w-4" />
            <span className="hidden sm:inline">Detailed</span>
          </Button>
          <Button
            variant={view === 'timeline' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setView('timeline')}
            className="gap-2"
          >
            <ChartNoAxesGantt className="h-4 w-4" />
            <span className="hidden sm:inline">Timeline</span>
          </Button>
          <Button
            variant={view === 'compact' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setView('compact')}
            className="gap-2"
          >
            <Grid3x3 className="h-4 w-4" />
            <span className="hidden sm:inline">Compact</span>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[60vh]">
        {view === 'detailed' && <VersionsContent />}
        {view === 'timeline' && <VersionsTimeline />}
        {view === 'compact' && <VersionsCompact />}
      </div>
    </div>
  );
}
