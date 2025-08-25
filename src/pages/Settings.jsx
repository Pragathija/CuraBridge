import AppLayout from '../layouts/AppLayout'
import { Card, CardHeader } from '../components/Card'
import Button from '../components/Button'

export default function Settings() {
  return (
    <AppLayout>
      <Card>
        <CardHeader title="Settings" />
        <div className="space-y-4">
          <div>
            <p className="font-medium">Notifications</p>
            <p className="text-sm text-slate-500">Manage alert preferences and reminder times.</p>
          </div>
          <Button>Save Changes</Button>
        </div>
      </Card>
    </AppLayout>
  )
}