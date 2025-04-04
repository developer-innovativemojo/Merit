
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Clock, RefreshCcw, Send, X } from 'lucide-react';

// Sample data for invitations (would normally come from a database)
const MOCK_INVITATIONS = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@partnerco.com',
    role: 'BD',
    relationship: 'external',
    status: 'pending',
    sentDate: '2023-10-15T10:30:00Z',
  },
  {
    id: '2',
    name: 'Sarah Miller',
    email: 'sarah@meritsolutions.com',
    role: 'HR',
    relationship: 'internal',
    status: 'accepted',
    sentDate: '2023-10-10T14:45:00Z',
    acceptedDate: '2023-10-11T09:20:00Z',
  },
  {
    id: '3',
    name: 'Carlos Rodriguez',
    email: 'carlos@clientcorp.com',
    role: 'Reviewer',
    relationship: 'external',
    status: 'expired',
    sentDate: '2023-09-25T17:15:00Z',
  },
  {
    id: '4',
    name: 'Emma Wilson',
    email: 'emma@techpartners.com',
    role: 'SME',
    relationship: 'external',
    status: 'pending',
    sentDate: '2023-10-14T08:30:00Z',
  },
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

type InvitationStatus = 'all' | 'pending' | 'accepted' | 'expired';

const InviteManagement = () => {
  const [activeFilter, setActiveFilter] = useState<InvitationStatus>('all');

  // In a real app, these would be actual API calls
  const handleResendInvite = (id: string) => {
    console.log(`Resending invite with ID: ${id}`);
  };

  const handleRevokeInvite = (id: string) => {
    console.log(`Revoking invite with ID: ${id}`);
  };

  const filteredInvitations = MOCK_INVITATIONS.filter(invite => {
    if (activeFilter === 'all') return true;
    return invite.status === activeFilter;
  });

  // Calculate acceptance rate
  const acceptedCount = MOCK_INVITATIONS.filter(invite => invite.status === 'accepted').length;
  const acceptanceRate = Math.round((acceptedCount / MOCK_INVITATIONS.length) * 100);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Invitations</CardTitle>
        <CardDescription>Manage your sent invitations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-x-2">
              {(['all', 'pending', 'accepted', 'expired'] as InvitationStatus[]).map((status) => (
                <Badge 
                  key={status} 
                  variant="outline" 
                  className={`bg-white cursor-pointer hover:bg-muted/50 transition-colors ${activeFilter === status ? 'bg-primary/10 text-primary border-primary/30' : ''}`}
                  onClick={() => setActiveFilter(status)}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Badge>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">{acceptanceRate}%</span> acceptance rate
            </div>
          </div>
          
          <div className="rounded-md border">
            <div className="bg-muted/50 px-4 py-2 text-sm font-medium grid grid-cols-12 gap-2">
              <div className="col-span-3">Name</div>
              <div className="col-span-3">Email</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Actions</div>
            </div>
            
            {filteredInvitations.length > 0 ? (
              filteredInvitations.map((invite) => (
                <div 
                  key={invite.id}
                  className="px-4 py-3 border-t grid grid-cols-12 gap-2 items-center text-sm"
                >
                  <div className="col-span-3 font-medium">{invite.name}</div>
                  <div className="col-span-3 text-muted-foreground">{invite.email}</div>
                  <div className="col-span-2">
                    <Badge variant="outline" className={invite.relationship === 'internal' ? 'bg-primary/10 text-primary border-primary/30' : undefined}>
                      {invite.role}
                    </Badge>
                  </div>
                  <div className="col-span-2">
                    {invite.status === 'pending' && (
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> Pending
                      </Badge>
                    )}
                    {invite.status === 'accepted' && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
                        <Check className="h-3 w-3" /> Accepted
                      </Badge>
                    )}
                    {invite.status === 'expired' && (
                      <Badge variant="outline" className="bg-gray-50 text-gray-500 border-gray-200 flex items-center gap-1">
                        <X className="h-3 w-3" /> Expired
                      </Badge>
                    )}
                  </div>
                  <div className="col-span-2 flex gap-1">
                    {(invite.status === 'pending' || invite.status === 'expired') && (
                      <>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="h-7 w-7"
                          onClick={() => handleResendInvite(invite.id)}
                          title="Resend invitation"
                        >
                          <Send className="h-3.5 w-3.5" />
                        </Button>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="h-7 w-7 text-destructive"
                          onClick={() => handleRevokeInvite(invite.id)}
                          title="Revoke invitation"
                        >
                          <X className="h-3.5 w-3.5" />
                        </Button>
                      </>
                    )}
                    {invite.status === 'accepted' && (
                      <span className="text-xs text-muted-foreground">
                        Joined {formatDate(invite.acceptedDate || '')}
                      </span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="px-4 py-8 text-center border-t text-muted-foreground">
                No {activeFilter !== 'all' ? activeFilter : ''} invitations found.
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InviteManagement;
