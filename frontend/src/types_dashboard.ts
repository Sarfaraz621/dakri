export interface WorkOrder {
  id: string
  toolRef: string
  teamMember: string
  status: 'Completed' | 'In Progress' | 'Not Started'
  duration: string
}

export interface MissingItem {
  toolRef: string
  teamMember: string
}

export interface RestockItem {
  toolRef: string
  toolEquipment: string
  stockStatus: 'Low' | 'None'
}

export interface ReceptionSummary {
  packagesReceived: number
  processedPackages: number
}

