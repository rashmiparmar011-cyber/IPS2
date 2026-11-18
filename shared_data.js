/**
 * India Purchase System - Shared Data Layer
 * Models:
 *  - Level 1: Purchase Order (PO)
 *  - Level 2: Line Items
 *  - Level 3: Goods Receive / Batches
 */

const STORAGE_KEY = 'indiaPurchaseSystem_v2_data';

const DEFAULT_PURCHASE_DATA = [
    {
        poNo: "PO01",
        company: "GRPL",
        poDate: "2026-09-11",
        prNo: "PR-501",
        requestedBy: "Rashmi Parmar",
        supplierName: "Vimal Enterprises",
        supplierCode: "SUP-101",
        department: "Information Technology",
        projectCode: "PRJ-001",
        projectName: "Enterprise Systems Upgrade",
        totalCost: 30000,
        status: "Partial", // New, Partial, Complete
        paymentStatus: "Partially Paid", // Pending, Partially Paid, Fully Paid
        paymentTerm: "50% Payment",
        amountPaid: 15000,
        dueDate: "2026-09-30",
        lineItems: [
            {
                itemKey: "Item001",
                itemName: "MacBook Air M2",
                reqQty: 10,
                recQty: 10,
                uom: "Piece",
                cost: 10000,
                balance: 0,
                status: "Full", // New, Partial, Full
                userAcceptanceStatus: "Accepted", // Pending, Accepted, Rejected
                userAcceptedQty: 10,
                acceptanceRemarks: "All 10 units verified and accepted.",
                location: "IT Store - Rack A-01",
                issuedQty: 2,
                batches: [
                    {
                        batchNo: "B001",
                        recDate: "2026-09-13",
                        recQty: 10,
                        expiryDate: "2027-09-13",
                        invoiceNo: "Inv001",
                        attachment: "inv001_macbook_b1.pdf"
                    }
                ],
                stockMovements: [
                    {
                        id: "MOV-1001",
                        date: "2026-09-13",
                        time: "10:30 AM",
                        type: "INWARD",
                        qty: 10,
                        balanceAfter: 10,
                        recipient: "IT Main Store",
                        department: "IT Store",
                        referenceNo: "GRN-PO01-B1",
                        location: "IT Store - Rack A-01",
                        remarks: "Goods inward received under Batch B001 (Invoice Inv001) - All 10 Accepted"
                    },
                    {
                        id: "MOV-1003",
                        date: "2026-09-17",
                        time: "11:00 AM",
                        type: "ISSUE",
                        qty: 2,
                        balanceAfter: 8,
                        recipient: "Amit Trivedi (Sr. Developer)",
                        department: "Information Technology",
                        project: "Enterprise Systems Upgrade",
                        referenceNo: "ISS-2026-001",
                        location: "IT Store - Rack A-01",
                        remarks: "Issued for Enterprise Systems Upgrade sprint delivery",
                        issuedBy: "ANISH"
                    }
                ]
            },
            {
                itemKey: "Item002",
                itemName: "Dell Latitude Laptop",
                reqQty: 20,
                recQty: 5,
                uom: "Piece",
                cost: 20000,
                balance: 15,
                status: "Partial",
                userAcceptanceStatus: "Pending",
                userAcceptedQty: 0,
                acceptanceRemarks: "Awaiting physical delivery at desk.",
                location: "Receiving Bay 2",
                issuedQty: 0,
                batches: [
                    {
                        batchNo: "B003",
                        recDate: "2026-09-13",
                        recQty: 5,
                        expiryDate: "2028-09-13",
                        invoiceNo: "Inv001",
                        attachment: "inv001_dell.pdf"
                    }
                ],
                stockMovements: [
                    {
                        id: "MOV-1004",
                        date: "2026-09-13",
                        time: "11:45 AM",
                        type: "INWARD",
                        qty: 5,
                        balanceAfter: 5,
                        recipient: "Receiving Bay",
                        department: "IT Store",
                        referenceNo: "GRN-PO01-B3",
                        location: "Receiving Bay 2",
                        remarks: "Received 5 units under Batch B003 - Awaiting Desk User Acceptance"
                    }
                ]
            }
        ]
    },
    {
        poNo: "PO02",
        company: "GHPL",
        poDate: "2026-09-14",
        prNo: "PR-502",
        requestedBy: "Vimal Kumar",
        supplierName: "Rashmi Tech Corp",
        supplierCode: "SUP-102",
        department: "Network & Infrastructure",
        projectCode: "PRJ-002",
        projectName: "Data Center Modernization",
        totalCost: 100000,
        status: "Complete",
        paymentStatus: "Fully Paid",
        paymentTerm: "Full Payment",
        amountPaid: 100000,
        dueDate: "2026-10-15",
        lineItems: [
            {
                itemKey: "Item003",
                itemName: "Server Rack 42U Enclosure",
                reqQty: 2,
                recQty: 2,
                uom: "Piece",
                cost: 60000,
                balance: 0,
                status: "Full",
                userAcceptanceStatus: "Accepted",
                userAcceptedQty: 2,
                acceptanceRemarks: "Server rack assembled and tested.",
                location: "Data Center - Bay 04",
                issuedQty: 1,
                batches: [
                    {
                        batchNo: "B004",
                        recDate: "2026-09-15",
                        recQty: 2,
                        expiryDate: "N/A",
                        invoiceNo: "Inv003",
                        attachment: "inv003_server_rack.pdf"
                    }
                ],
                stockMovements: [
                    {
                        id: "MOV-1005",
                        date: "2026-09-15",
                        time: "09:30 AM",
                        type: "INWARD",
                        qty: 2,
                        balanceAfter: 2,
                        recipient: "DC Central Store",
                        department: "Network & Infrastructure",
                        referenceNo: "GRN-PO02-B4",
                        location: "Data Center - Bay 04",
                        remarks: "Received Batch B004 (Invoice Inv003) - Verified and Accepted"
                    },
                    {
                        id: "MOV-1006",
                        date: "2026-09-17",
                        time: "16:20 PM",
                        type: "ISSUE",
                        qty: 1,
                        balanceAfter: 1,
                        recipient: "Sanjay Verma (Lead Infra)",
                        department: "Network & Infrastructure",
                        project: "Data Center Modernization",
                        referenceNo: "ISS-2026-002",
                        location: "Data Center - Bay 04",
                        remarks: "Racked in Server Hall A - Row 4",
                        issuedBy: "ANISH"
                    }
                ]
            },
            {
                itemKey: "Item004",
                itemName: "Cisco 48-Port Managed Switch",
                reqQty: 4,
                recQty: 4,
                uom: "Piece",
                cost: 40000,
                balance: 0,
                status: "Full",
                userAcceptanceStatus: "Accepted",
                userAcceptedQty: 4,
                acceptanceRemarks: "Configured and racked in DC.",
                location: "Network Lab - Rack N-03",
                issuedQty: 1,
                batches: [
                    {
                        batchNo: "B005",
                        recDate: "2026-09-15",
                        recQty: 4,
                        expiryDate: "N/A",
                        invoiceNo: "Inv003",
                        attachment: "inv003_cisco_switch.pdf"
                    }
                ],
                stockMovements: [
                    {
                        id: "MOV-1007",
                        date: "2026-09-15",
                        time: "10:00 AM",
                        type: "INWARD",
                        qty: 4,
                        balanceAfter: 4,
                        recipient: "Network Lab",
                        department: "Network & Infrastructure",
                        referenceNo: "GRN-PO02-B5",
                        location: "Network Lab - Rack N-03",
                        remarks: "Received Batch B005 (Invoice Inv003) - Bench tested & Accepted"
                    },
                    {
                        id: "MOV-1008",
                        date: "2026-09-18",
                        time: "14:40 PM",
                        type: "ISSUE",
                        qty: 1,
                        balanceAfter: 3,
                        recipient: "Ramesh Joshi (Network Admin)",
                        department: "Network & Infrastructure",
                        project: "Data Center Modernization",
                        referenceNo: "ISS-2026-003",
                        location: "Network Lab - Rack N-03",
                        remarks: "Configured for DC aggregation rack",
                        issuedBy: "ANISH"
                    }
                ]
            }
        ]
    },
    {
        poNo: "PO03",
        company: "LSPL",
        poDate: "2026-09-15",
        prNo: "PR-503",
        requestedBy: "Priya Sharma",
        supplierName: "TechnoSource Pvt Ltd",
        supplierCode: "SUP-103",
        department: "IT Infrastructure",
        projectCode: "PRJ-003",
        projectName: "LAN Cabling Overhaul",
        totalCost: 45000,
        status: "New",
        paymentStatus: "Pending",
        paymentTerm: "Full Payment",
        amountPaid: 0,
        dueDate: "2026-10-05",
        lineItems: [
            {
                itemKey: "Item005",
                itemName: "Cat6 UTP Cable Roll 305m",
                reqQty: 15,
                recQty: 0,
                uom: "Roll",
                cost: 30000,
                balance: 15,
                status: "New",
                userAcceptanceStatus: "Pending",
                userAcceptedQty: 0,
                acceptanceRemarks: "Awaiting shipment arrival.",
                location: "General Store - Bin C-12",
                issuedQty: 0,
                batches: [],
                stockMovements: []
            },
            {
                itemKey: "Item006",
                itemName: "RJ45 Connectors (Pack of 100)",
                reqQty: 30,
                recQty: 0,
                uom: "Pack",
                cost: 15000,
                balance: 30,
                status: "New",
                userAcceptanceStatus: "Pending",
                userAcceptedQty: 0,
                acceptanceRemarks: "Awaiting shipment arrival.",
                location: "General Store - Bin C-14",
                issuedQty: 0,
                batches: [],
                stockMovements: []
            }
        ]
    },
    {
        poNo: "PO04",
        company: "GRPL",
        poDate: "2026-09-16",
        prNo: "PR-504",
        requestedBy: "John Doe",
        supplierName: "Global Infotech Solutions",
        supplierCode: "SUP-104",
        department: "Administration",
        projectCode: "PRJ-004",
        projectName: "HQ Ergonomic Furniture",
        totalCost: 25000,
        status: "Partial",
        paymentStatus: "Pending",
        paymentTerm: "Partial Payment",
        amountPaid: 0,
        dueDate: "2026-09-25",
        lineItems: [
            {
                itemKey: "Item007",
                itemName: "Ergonomic High-Back Mesh Chair",
                reqQty: 5,
                recQty: 2,
                uom: "Piece",
                cost: 25000,
                balance: 3,
                status: "Partial",
                userAcceptanceStatus: "Rejected",
                userAcceptedQty: 0,
                acceptanceRemarks: "Quality defect / failed on testing — Defective armrest mechanism and torn lumbar cushion.",
                location: "Quarantine Area - Defect Bay",
                issuedQty: 0,
                batches: [
                    {
                        batchNo: "B006",
                        recDate: "2026-09-16",
                        recQty: 2,
                        expiryDate: "N/A",
                        invoiceNo: "Inv004",
                        attachment: "inv004_chairs.pdf"
                    }
                ],
                stockMovements: [
                    {
                        id: "MOV-1009",
                        date: "2026-09-16",
                        time: "15:00 PM",
                        type: "INWARD",
                        qty: 2,
                        balanceAfter: 0,
                        recipient: "Quarantine Desk",
                        department: "Administration",
                        referenceNo: "GRN-PO04-B6",
                        location: "Quarantine Area - Defect Bay",
                        remarks: "Rejected during Desk User Acceptance (defective) - Not available for issue"
                    }
                ]
            }
        ]
    },
    {
        poNo: "PO05",
        company: "GHPL",
        poDate: "2026-09-17",
        prNo: "PR-505",
        requestedBy: "Anish Patel",
        supplierName: "Apex Hardware Systems",
        supplierCode: "SUP-105",
        department: "Operations & Safety",
        projectCode: "PRJ-005",
        projectName: "Facility Calibration & Tooling",
        totalCost: 18000,
        status: "Complete",
        paymentStatus: "Pending",
        paymentTerm: "Full Payment",
        amountPaid: 0,
        dueDate: "2026-10-10",
        lineItems: [
            {
                itemKey: "Item008",
                itemName: "Industrial Digital Calipers (Set of 6)",
                reqQty: 6,
                recQty: 6,
                uom: "Set",
                cost: 18000,
                balance: 0,
                status: "Full",
                userAcceptanceStatus: "Rejected",
                userAcceptedQty: 0,
                acceptanceRemarks: "Quality defect / failed on testing — Calibration certificate expired and sensor display flickering.",
                location: "Quarantine Area - Defect Bay",
                issuedQty: 0,
                batches: [
                    {
                        batchNo: "B007",
                        recDate: "2026-09-17",
                        recQty: 6,
                        expiryDate: "2028-09-17",
                        invoiceNo: "Inv005",
                        attachment: "inv005_calipers.pdf"
                    }
                ],
                stockMovements: [
                    {
                        id: "MOV-1010",
                        date: "2026-09-17",
                        time: "16:45 PM",
                        type: "INWARD",
                        qty: 6,
                        balanceAfter: 0,
                        recipient: "Quarantine Desk",
                        department: "Operations & Safety",
                        referenceNo: "GRN-PO05-B7",
                        location: "Quarantine Area - Defect Bay",
                        remarks: "Rejected during Desk User Acceptance (expired cert) - Not available for issue"
                    }
                ]
            }
        ]
    }
];

class PurchaseDataManager {
    constructor() {
        this.data = this.loadData();
    }

    loadData() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    let needsSave = false;
                    // Migrate: ensure Item007 is rejected with reason
                    parsed.forEach(po => {
                        if (po.lineItems) {
                            po.lineItems.forEach(li => {
                                if (li.itemKey === 'Item007' && (!li.userAcceptanceStatus || li.userAcceptanceStatus !== 'Rejected')) {
                                    li.userAcceptanceStatus = 'Rejected';
                                    li.acceptanceRemarks = 'Quality defect / failed on testing — Defective armrest mechanism and torn lumbar cushion.';
                                    needsSave = true;
                                }
                            });
                        }
                    });

                    // Migrate: ensure PO05 exists so Rejected tab has rich sample records
                    const hasPo5 = parsed.some(p => p.poNo === 'PO05');
                    if (!hasPo5) {
                        const po5Default = DEFAULT_PURCHASE_DATA.find(p => p.poNo === 'PO05');
                        if (po5Default) {
                            parsed.push(JSON.parse(JSON.stringify(po5Default)));
                            needsSave = true;
                        }
                    }

                    // Migrate: Ensure company field exists on all POs
                    parsed.forEach(po => {
                        if (!po.company) {
                            if (po.poNo === 'PO01') po.company = 'GRPL';
                            else if (po.poNo === 'PO02') po.company = 'GHPL';
                            else if (po.poNo === 'PO03') po.company = 'LSPL';
                            else if (po.poNo === 'PO04') po.company = 'GRPL';
                            else if (po.poNo === 'PO05') po.company = 'GHPL';
                            else po.company = 'GRPL';
                            needsSave = true;
                        }
                    });

                    // Migrate: Ensure inventory fields (location, issuedQty, stockMovements) exist on all items
                    parsed.forEach(po => {
                        if (po.lineItems) {
                            po.lineItems.forEach(li => {
                                if (li.issuedQty === undefined) {
                                    if (li.itemKey === 'Item001') li.issuedQty = 2;
                                    else if (li.itemKey === 'Item003') li.issuedQty = 1;
                                    else if (li.itemKey === 'Item004') li.issuedQty = 1;
                                    else li.issuedQty = 0;
                                    needsSave = true;
                                }
                                if (!li.location) {
                                    if (li.itemKey === 'Item001') li.location = 'IT Store - Rack A-01';
                                    else if (li.itemKey === 'Item002') li.location = 'Receiving Bay 2';
                                    else if (li.itemKey === 'Item003') li.location = 'Data Center - Bay 04';
                                    else if (li.itemKey === 'Item004') li.location = 'Network Lab - Rack N-03';
                                    else if (li.userAcceptanceStatus === 'Rejected') li.location = 'Quarantine Area - Defect Bay';
                                    else li.location = 'Main Store - General Rack';
                                    needsSave = true;
                                }
                                if (li.coaFile === undefined) {
                                    if (li.itemKey === 'Item001') li.coaFile = 'COA-B001-QA-Cert.pdf';
                                    else if (li.itemKey === 'Item004') li.coaFile = 'COA-B005-Compliance.pdf';
                                    else li.coaFile = '';
                                    needsSave = true;
                                }

                                // Clean up test batches on Item001 so only clean primary batch B001 (10) remains
                                if (po.poNo === 'PO01' && li.itemKey === 'Item001') {
                                    if (!li.batches || li.batches.length > 1 || li.batches.some(b => b.batchNo !== 'B001' || b.recQty !== 10)) {
                                        li.batches = [
                                            {
                                                batchNo: "B001",
                                                recDate: "2026-09-13",
                                                recQty: 10,
                                                expiryDate: "2027-09-13",
                                                invoiceNo: "Inv001",
                                                attachment: "inv001_macbook_b1.pdf"
                                            }
                                        ];
                                        li.recQty = 10;
                                        li.userAcceptedQty = 10;
                                        needsSave = true;
                                    }
                                }
                                if (!li.stockMovements || li.stockMovements.length === 0) {
                                    const defaultPO = DEFAULT_PURCHASE_DATA.find(p => p.poNo === po.poNo);
                                    const defaultItem = defaultPO ? defaultPO.lineItems.find(i => i.itemKey === li.itemKey) : null;
                                    if (defaultItem && defaultItem.stockMovements && defaultItem.stockMovements.length > 0) {
                                        li.stockMovements = JSON.parse(JSON.stringify(defaultItem.stockMovements));
                                    } else {
                                        li.stockMovements = [];
                                        if (li.batches && li.batches.length > 0) {
                                            let runningBal = 0;
                                            li.batches.forEach(b => {
                                                runningBal += Number(b.recQty) || 0;
                                                li.stockMovements.push({
                                                    id: `MOV-IN-${b.batchNo}`,
                                                    date: b.recDate || po.poDate,
                                                    time: '10:00 AM',
                                                    type: 'INWARD',
                                                    qty: Number(b.recQty) || 0,
                                                    balanceAfter: runningBal,
                                                    recipient: 'Warehouse Store',
                                                    department: po.department || 'Store',
                                                    referenceNo: `GRN-${po.poNo}-${b.batchNo}`,
                                                    location: li.location,
                                                    remarks: `Inward receipt Batch ${b.batchNo}`
                                                });
                                            });
                                        }
                                    }
                                    needsSave = true;
                                }
                            });
                        }
                    });

                    if (needsSave) {
                        this.saveData(parsed);
                    }
                    return parsed;
                }
            }
        } catch (e) {
            console.warn("Could not read localStorage, using default data", e);
        }
        this.saveData(DEFAULT_PURCHASE_DATA);
        return JSON.parse(JSON.stringify(DEFAULT_PURCHASE_DATA));
    }

    saveData(data) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.error("Failed to save to localStorage", e);
        }
        this.data = data;
    }

    resetToDefault() {
        localStorage.removeItem(STORAGE_KEY);
        this.data = JSON.parse(JSON.stringify(DEFAULT_PURCHASE_DATA));
        this.saveData(this.data);
        return this.data;
    }

    getAllPOs() {
        return this.data;
    }

    getPO(poNo) {
        return this.data.find(p => p.poNo.toLowerCase() === poNo.toLowerCase());
    }

    // Goods-In: flatten to line items
    getGoodsInLineItems() {
        const items = [];
        this.data.forEach(po => {
            po.lineItems.forEach(li => {
                items.push({
                    poNo: po.poNo,
                    poDate: po.poDate,
                    supplierName: po.supplierName,
                    requestedBy: po.requestedBy,
                    totalCost: po.totalCost,
                    poStatus: po.status,
                    itemKey: li.itemKey,
                    itemName: li.itemName,
                    reqQty: li.reqQty,
                    recQty: li.recQty,
                    balance: li.balance,
                    uom: li.uom,
                    cost: li.cost,
                    status: li.status,
                    userAcceptanceStatus: li.userAcceptanceStatus || 'Pending',
                    acceptanceRemarks: li.acceptanceRemarks || '',
                    rejectionReason: li.acceptanceRemarks || '',
                    userAcceptedQty: li.userAcceptedQty || 0,
                    batches: li.batches || []
                });
            });
        });
        return items;
    }

    // User Acceptance: line items from requester perspective
    getUserAcceptanceItems() {
        const items = [];
        this.data.forEach(po => {
            po.lineItems.forEach(li => {
                items.push({
                    poNo: po.poNo,
                    poDate: po.poDate,
                    prNo: po.prNo,
                    supplierName: po.supplierName,
                    requestedBy: po.requestedBy,
                    itemKey: li.itemKey,
                    itemName: li.itemName,
                    reqQty: li.reqQty,
                    recQty: li.recQty,
                    userAcceptedQty: li.userAcceptedQty || 0,
                    uom: li.uom,
                    userAcceptanceStatus: li.userAcceptanceStatus || 'Pending',
                    acceptanceRemarks: li.acceptanceRemarks || '',
                    batches: li.batches || []
                });
            });
        });
        return items;
    }

    // Add batch to a line item in Goods-In
    addBatch(poNo, itemKey, batchData) {
        const po = this.getPO(poNo);
        if (!po) return { success: false, message: 'PO not found' };

        const lineItem = po.lineItems.find(li => li.itemKey.toLowerCase() === itemKey.toLowerCase());
        if (!lineItem) return { success: false, message: 'Line item not found' };

        const qty = Number(batchData.recQty) || 0;
        if (qty <= 0) return { success: false, message: 'Received quantity must be greater than 0' };

        if (!lineItem.batches) lineItem.batches = [];
        lineItem.batches.push({
            batchNo: batchData.batchNo || `B-${Date.now().toString().slice(-4)}`,
            recDate: batchData.recDate || new Date().toISOString().split('T')[0],
            recQty: qty,
            expiryDate: batchData.expiryDate || 'N/A',
            invoiceNo: batchData.invoiceNo || 'N/A',
            attachment: batchData.attachment || 'attachment.pdf'
        });

        // Recalculate line item received qty and balance
        const totalReceived = lineItem.batches.reduce((sum, b) => sum + Number(b.recQty), 0);
        lineItem.recQty = totalReceived;
        lineItem.balance = Math.max(0, lineItem.reqQty - totalReceived);

        if (lineItem.balance === 0) {
            lineItem.status = 'Full';
        } else if (lineItem.recQty > 0) {
            lineItem.status = 'Partial';
        } else {
            lineItem.status = 'New';
        }

        // Recalculate parent PO status
        const allItemsFull = po.lineItems.every(li => li.status === 'Full');
        const anyItemReceived = po.lineItems.some(li => li.recQty > 0);

        if (allItemsFull) {
            po.status = 'Complete';
        } else if (anyItemReceived) {
            po.status = 'Partial';
        } else {
            po.status = 'New';
        }

        this.saveData(this.data);
        return { success: true, lineItem, po };
    }

    // Update an existing batch
    updateBatch(poNo, itemKey, batchIndex, updatedBatchData) {
        const po = this.getPO(poNo);
        if (!po) return { success: false, message: 'PO not found' };
        const lineItem = po.lineItems.find(li => li.itemKey.toLowerCase() === itemKey.toLowerCase());
        if (!lineItem || !lineItem.batches || !lineItem.batches[batchIndex]) return { success: false, message: 'Batch not found' };

        const newQty = Number(updatedBatchData.recQty);
        if (!newQty || newQty <= 0) {
            return {
                success: false,
                message: 'Received quantity must be greater than 0.'
            };
        }

        lineItem.batches[batchIndex] = {
            ...lineItem.batches[batchIndex],
            recDate: updatedBatchData.recDate || lineItem.batches[batchIndex].recDate,
            recQty: newQty,
            batchNo: updatedBatchData.batchNo || lineItem.batches[batchIndex].batchNo,
            expiryDate: updatedBatchData.expiryDate || lineItem.batches[batchIndex].expiryDate,
            invoiceNo: updatedBatchData.invoiceNo || lineItem.batches[batchIndex].invoiceNo,
            attachment: updatedBatchData.attachment || lineItem.batches[batchIndex].attachment
        };

        // Recalculate
        const totalReceived = lineItem.batches.reduce((sum, b) => sum + Number(b.recQty), 0);
        lineItem.recQty = totalReceived;
        lineItem.balance = Math.max(0, lineItem.reqQty - totalReceived);

        if (lineItem.balance === 0 && lineItem.recQty > 0) {
            lineItem.status = 'Full';
        } else if (lineItem.recQty > 0) {
            lineItem.status = 'Partial';
        } else {
            lineItem.status = 'New';
        }

        const allItemsFull = po.lineItems.every(li => li.status === 'Full');
        const anyItemReceived = po.lineItems.some(li => li.recQty > 0);
        po.status = allItemsFull ? 'Complete' : (anyItemReceived ? 'Partial' : 'New');

        this.saveData(this.data);
        return { success: true, lineItem, po };
    }

    // Delete a batch
    deleteBatch(poNo, itemKey, batchIndex) {
        const po = this.getPO(poNo);
        if (!po) return { success: false };
        const lineItem = po.lineItems.find(li => li.itemKey.toLowerCase() === itemKey.toLowerCase());
        if (!lineItem || !lineItem.batches || !lineItem.batches[batchIndex]) return { success: false };

        lineItem.batches.splice(batchIndex, 1);
        const totalReceived = lineItem.batches.reduce((sum, b) => sum + Number(b.recQty), 0);
        lineItem.recQty = totalReceived;
        lineItem.balance = Math.max(0, lineItem.reqQty - totalReceived);

        if (lineItem.balance === 0 && lineItem.recQty > 0) {
            lineItem.status = 'Full';
        } else if (lineItem.recQty > 0) {
            lineItem.status = 'Partial';
        } else {
            lineItem.status = 'New';
        }

        const allItemsFull = po.lineItems.every(li => li.status === 'Full');
        const anyItemReceived = po.lineItems.some(li => li.recQty > 0);
        po.status = allItemsFull ? 'Complete' : (anyItemReceived ? 'Partial' : 'New');

        this.saveData(this.data);
        return { success: true, lineItem, po };
    }

    // User acceptance update
    updateUserAcceptance(poNo, itemKey, status, remarks = '', acceptedQty = null) {
        const po = this.getPO(poNo);
        if (!po) return { success: false };
        const lineItem = po.lineItems.find(li => li.itemKey.toLowerCase() === itemKey.toLowerCase());
        if (!lineItem) return { success: false };

        lineItem.userAcceptanceStatus = status;
        lineItem.acceptanceRemarks = remarks;
        if (status === 'Accepted') {
            lineItem.userAcceptedQty = acceptedQty !== null ? acceptedQty : lineItem.recQty;
            if (!lineItem.stockMovements) lineItem.stockMovements = [];
            // Check if acceptance inward movement already exists
            const hasAcceptMov = lineItem.stockMovements.some(m => m.type === 'INWARD_ACCEPT');
            if (!hasAcceptMov && lineItem.userAcceptedQty > 0) {
                lineItem.stockMovements.push({
                    id: `MOV-ACC-${Date.now().toString().slice(-5)}`,
                    date: new Date().toISOString().split('T')[0],
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    type: 'INWARD_ACCEPT',
                    qty: lineItem.userAcceptedQty,
                    balanceAfter: Math.max(0, lineItem.userAcceptedQty - (lineItem.issuedQty || 0)),
                    recipient: 'Inventory Active Stock',
                    department: po.department || 'Store',
                    referenceNo: `ACC-${po.poNo}`,
                    location: lineItem.location || 'Main Store',
                    remarks: `Accepted at Desk by Requester: ${remarks || 'Material inspected and approved'}`
                });
            }
        } else if (status === 'Rejected') {
            lineItem.userAcceptedQty = 0;
            if (!lineItem.stockMovements) lineItem.stockMovements = [];
            lineItem.stockMovements.push({
                id: `MOV-REJ-${Date.now().toString().slice(-5)}`,
                date: new Date().toISOString().split('T')[0],
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                type: 'REJECTION',
                qty: 0,
                balanceAfter: 0,
                recipient: 'Quarantine Desk',
                department: po.department || 'Store',
                referenceNo: `REJ-${po.poNo}`,
                location: 'Quarantine Area - Defect Bay',
                remarks: `Material rejected by desk user: ${remarks || 'Defect reported'}`
            });
        }

        this.saveData(this.data);
        return { success: true, lineItem, po };
    }

    // Finance payment recording
    recordPayment(poNo, amount, paymentTerm, referenceNo = '') {
        const po = this.getPO(poNo);
        if (!po) return { success: false };

        po.amountPaid = (po.amountPaid || 0) + Number(amount);
        if (po.amountPaid >= po.totalCost) {
            po.paymentStatus = 'Fully Paid';
            po.amountPaid = po.totalCost;
        } else if (po.amountPaid > 0) {
            po.paymentStatus = 'Partially Paid';
        } else {
            po.paymentStatus = 'Pending';
        }

        if (paymentTerm) po.paymentTerm = paymentTerm;

        this.saveData(this.data);
        return { success: true, po };
    }

    // ==========================================
    // INVENTORY MODULE METHODS
    // ==========================================

    // Get inventory items filtered by PO, available stock, and query
    getInventoryItems(options = {}) {
        const {
            poNo = 'All',
            supplier = 'All',
            company = 'All',
            availableOnly = true,
            search = '',
            department = 'All',
            status = 'All'
        } = options;

        const results = [];

        this.data.forEach(po => {
            if (company && company !== 'All' && (po.company || 'GRPL').toUpperCase() !== company.toUpperCase()) {
                return;
            }

            if (supplier && supplier !== 'All' && (po.supplierName || '').trim().toLowerCase() !== supplier.trim().toLowerCase()) {
                return;
            }

            if (poNo && poNo !== 'All' && po.poNo.toLowerCase() !== poNo.toLowerCase()) {
                return;
            }

            if (!po.lineItems || !Array.isArray(po.lineItems)) return;

            po.lineItems.forEach(li => {
                const recQty = Number(li.recQty) || 0;
                let acceptedQty = 0;
                if (li.userAcceptanceStatus === 'Accepted') {
                    acceptedQty = Number(li.userAcceptedQty > 0 ? li.userAcceptedQty : li.recQty) || 0;
                }

                const issuedQty = Number(li.issuedQty) || 0;
                const availableQty = Math.max(0, acceptedQty - issuedQty);
                const reqQty = Number(li.reqQty) || 1;
                const totalCost = Number(li.cost) || 0;
                const unitCost = reqQty > 0 ? (totalCost / reqQty) : totalCost;
                const availableValue = availableQty * unitCost;

                let stockStatus = 'In Stock';
                if (li.userAcceptanceStatus === 'Rejected') {
                    stockStatus = 'Rejected / Defective';
                } else if (li.userAcceptanceStatus === 'Pending') {
                    stockStatus = 'Pending Acceptance';
                } else if (recQty === 0) {
                    stockStatus = 'Awaiting Delivery';
                } else if (availableQty === 0 && acceptedQty > 0) {
                    stockStatus = 'Fully Dispatched';
                } else if (availableQty <= 2 && availableQty > 0) {
                    stockStatus = 'Low Stock';
                } else {
                    stockStatus = 'In Stock';
                }

                // If availableOnly is true, skip items with no available stock
                if (availableOnly && availableQty <= 0) {
                    return;
                }

                // Search query filter (Item code, Item name, PO No, Supplier, Location)
                if (search && search.trim() !== '') {
                    const q = search.trim().toLowerCase();
                    const match = (
                        (li.itemKey && li.itemKey.toLowerCase().includes(q)) ||
                        (li.itemName && li.itemName.toLowerCase().includes(q)) ||
                        (po.poNo && po.poNo.toLowerCase().includes(q)) ||
                        (po.supplierName && po.supplierName.toLowerCase().includes(q)) ||
                        (li.location && li.location.toLowerCase().includes(q))
                    );
                    if (!match) return;
                }

                // Department filter
                if (department && department !== 'All') {
                    if (po.department !== department) return;
                }

                // Stock status filter
                if (status && status !== 'All') {
                    if (status === 'Low Stock' && stockStatus !== 'Low Stock') return;
                    if (status === 'In Stock' && stockStatus !== 'In Stock') return;
                    if (status === 'Fully Dispatched' && stockStatus !== 'Fully Dispatched') return;
                    if (status === 'Rejected' && stockStatus !== 'Rejected / Defective') return;
                    if (status === 'Pending' && stockStatus !== 'Pending Acceptance') return;
                }

                results.push({
                    company: po.company || 'GRPL',
                    poNo: po.poNo,
                    poDate: po.poDate,
                    prNo: po.prNo || 'N/A',
                    supplierName: po.supplierName,
                    supplierCode: po.supplierCode,
                    department: po.department,
                    projectCode: po.projectCode,
                    projectName: po.projectName,
                    totalPoCost: po.totalCost,
                    poStatus: po.status,
                    itemKey: li.itemKey,
                    itemName: li.itemName,
                    reqQty: reqQty,
                    recQty: recQty,
                    userAcceptanceStatus: li.userAcceptanceStatus || 'Pending',
                    userAcceptedQty: acceptedQty,
                    acceptanceRemarks: li.acceptanceRemarks || '',
                    issuedQty: issuedQty,
                    availableQty: availableQty,
                    uom: li.uom || 'Piece',
                    cost: totalCost,
                    unitCost: Math.round(unitCost * 100) / 100,
                    availableValue: Math.round(availableValue * 100) / 100,
                    location: li.location || 'Main Warehouse',
                    stockStatus: stockStatus,
                    batches: li.batches || [],
                    stockMovements: li.stockMovements || [],
                    coaFile: li.coaFile || ''
                });
            });
        });

        return results;
    }

    // Get KPI counts for Inventory dashboard
    getInventoryKPIs(poNo = 'All') {
        const allItems = this.getInventoryItems({ poNo, availableOnly: false });
        let totalAvailableUnits = 0;
        let totalInventoryValue = 0;
        let inStockItemCount = 0;
        let totalIssuedUnits = 0;
        const poSet = new Set();

        allItems.forEach(item => {
            totalAvailableUnits += item.availableQty;
            totalInventoryValue += item.availableValue;
            totalIssuedUnits += item.issuedQty;
            if (item.availableQty > 0) {
                inStockItemCount++;
                poSet.add(item.poNo);
            }
        });

        return {
            totalAvailableUnits,
            totalInventoryValue: Math.round(totalInventoryValue),
            inStockItemCount,
            totalIssuedUnits,
            totalPOsWithStock: poSet.size,
            totalItems: allItems.length
        };
    }

    // Issue stock from available inventory to user / department / project
    issueStock(poNo, itemKey, issueDetails) {
        const po = this.getPO(poNo);
        if (!po) return { success: false, message: `PO "${poNo}" not found.` };

        const li = po.lineItems.find(i => i.itemKey.toLowerCase() === itemKey.toLowerCase());
        if (!li) return { success: false, message: `Item "${itemKey}" not found in PO "${poNo}".` };

        const qty = Number(issueDetails.qty) || 0;
        if (qty <= 0) return { success: false, message: 'Issue quantity must be at least 1 unit.' };

        const acceptedQty = li.userAcceptanceStatus === 'Accepted' ? Number(li.userAcceptedQty > 0 ? li.userAcceptedQty : li.recQty) : 0;
        const currentIssued = Number(li.issuedQty) || 0;
        const currentAvailable = Math.max(0, acceptedQty - currentIssued);

        if (qty > currentAvailable) {
            return {
                success: false,
                message: `Cannot issue ${qty} units. Only ${currentAvailable} units are available in stock.`
            };
        }

        li.issuedQty = currentIssued + qty;
        const newAvailable = currentAvailable - qty;

        if (!li.stockMovements) li.stockMovements = [];

        const now = new Date();
        const dateStr = issueDetails.date || now.toISOString().split('T')[0];
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const movement = {
            id: `ISS-${Date.now().toString().slice(-6)}`,
            date: dateStr,
            time: timeStr,
            type: 'ISSUE',
            qty: qty,
            balanceAfter: newAvailable,
            recipient: issueDetails.recipient || 'N/A',
            department: issueDetails.department || po.department || 'N/A',
            project: issueDetails.project || po.projectName || 'N/A',
            referenceNo: issueDetails.referenceNo || `ISS-${now.getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
            location: issueDetails.location || li.location || 'Main Store',
            remarks: issueDetails.remarks || 'Stock issued from available inventory',
            issuedBy: issueDetails.issuedBy || 'ANISH'
        };

        li.stockMovements.push(movement);
        this.saveData(this.data);

        return { success: true, item: li, movement, po };
    }

    // Return previously issued stock back to available inventory, or return available stock to vendor
    returnStock(poNo, itemKey, returnDetails) {
        const po = this.getPO(poNo);
        if (!po) return { success: false, message: `PO "${poNo}" not found.` };

        const li = po.lineItems.find(i => i.itemKey.toLowerCase() === itemKey.toLowerCase());
        if (!li) return { success: false, message: `Item "${itemKey}" not found in PO "${poNo}".` };

        const qty = Number(returnDetails.qty) || 0;
        if (qty <= 0) return { success: false, message: 'Return quantity must be at least 1 unit.' };

        const returnType = returnDetails.type || 'STORE'; // 'STORE' or 'VENDOR'
        const acceptedQty = li.userAcceptanceStatus === 'Accepted' ? Number(li.userAcceptedQty > 0 ? li.userAcceptedQty : li.recQty) : 0;
        const currentIssued = Number(li.issuedQty) || 0;
        const currentAvailable = Math.max(0, acceptedQty - currentIssued);

        if (!li.stockMovements) li.stockMovements = [];
        const now = new Date();
        const dateStr = returnDetails.date || now.toISOString().split('T')[0];
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (returnType === 'VENDOR') {
            if (qty > currentAvailable) {
                return {
                    success: false,
                    message: `Cannot return ${qty} units to vendor. Maximum available stock to return is ${currentAvailable}.`
                };
            }
            if (li.userAcceptedQty !== undefined && li.userAcceptedQty !== null && li.userAcceptedQty > 0) {
                li.userAcceptedQty = Math.max(0, Number(li.userAcceptedQty) - qty);
            } else {
                li.recQty = Math.max(0, Number(li.recQty) - qty);
            }
            const newAccepted = li.userAcceptanceStatus === 'Accepted' ? Number(li.userAcceptedQty > 0 ? li.userAcceptedQty : li.recQty) : 0;
            const newAvailable = Math.max(0, newAccepted - currentIssued);

            const movement = {
                id: `RTV-${Date.now().toString().slice(-6)}`,
                date: dateStr,
                time: timeStr,
                type: 'RETURN_VENDOR',
                qty: qty,
                balanceAfter: newAvailable,
                recipient: po.supplierName,
                department: po.department || 'Stores',
                project: po.projectName || 'N/A',
                referenceNo: returnDetails.referenceNo || `RTV-${now.getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
                location: li.location || 'Main Store',
                remarks: returnDetails.remarks || 'Stock returned to vendor / supplier (RTV)',
                receivedBy: returnDetails.receivedBy || 'ANISH'
            };

            li.stockMovements.push(movement);
            this.saveData(this.data);
            return { success: true, message: `Successfully returned ${qty} units to vendor ${po.supplierName}!`, item: li, movement, po };
        } else {
            if (qty > currentIssued) {
                return {
                    success: false,
                    message: `Cannot return ${qty} units. Maximum issued units available to return is ${currentIssued}.`
                };
            }

            li.issuedQty = currentIssued - qty;
            const newAvailable = Math.max(0, acceptedQty - li.issuedQty);

            const movement = {
                id: `RET-${Date.now().toString().slice(-6)}`,
                date: dateStr,
                time: timeStr,
                type: 'RETURN',
                qty: qty,
                balanceAfter: newAvailable,
                recipient: returnDetails.returnedBy || 'N/A',
                department: returnDetails.department || po.department || 'N/A',
                project: po.projectName || 'N/A',
                referenceNo: returnDetails.referenceNo || `RET-${now.getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
                location: li.location || 'Main Store',
                remarks: returnDetails.remarks || 'Stock returned back to available inventory',
                receivedBy: returnDetails.receivedBy || 'ANISH'
            };

            li.stockMovements.push(movement);
            this.saveData(this.data);
            return { success: true, message: `Successfully returned ${qty} units back to store!`, item: li, movement, po };
        }
    }

    // Adjust physical stock count (Audits, scrap, discrepancy)
    adjustStock(poNo, itemKey, adjustDetails) {
        const po = this.getPO(poNo);
        if (!po) return { success: false, message: `PO "${poNo}" not found.` };

        const li = po.lineItems.find(i => i.itemKey.toLowerCase() === itemKey.toLowerCase());
        if (!li) return { success: false, message: `Item "${itemKey}" not found in PO "${poNo}".` };

        const qty = Number(adjustDetails.qty) || 0;
        if (qty <= 0) return { success: false, message: 'Adjustment quantity must be greater than zero.' };

        const adjustType = adjustDetails.type || 'DEDUCT'; // 'ADD' or 'DEDUCT'
        const acceptedQty = li.userAcceptanceStatus === 'Accepted' ? Number(li.userAcceptedQty > 0 ? li.userAcceptedQty : li.recQty) : 0;
        const currentIssued = Number(li.issuedQty) || 0;
        const currentAvailable = Math.max(0, acceptedQty - currentIssued);

        if (adjustType === 'DEDUCT') {
            if (qty > currentAvailable) {
                return {
                    success: false,
                    message: `Cannot deduct ${qty} units. Current available stock is only ${currentAvailable}.`
                };
            }
            li.issuedQty = currentIssued + qty;
        } else {
            // Surplus adjustment
            li.issuedQty = Math.max(0, currentIssued - qty);
        }

        const newAvailable = Math.max(0, acceptedQty - li.issuedQty);

        if (!li.stockMovements) li.stockMovements = [];

        const now = new Date();
        const dateStr = adjustDetails.date || now.toISOString().split('T')[0];
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const movement = {
            id: `ADJ-${Date.now().toString().slice(-6)}`,
            date: dateStr,
            time: timeStr,
            type: 'ADJUSTMENT',
            qty: (adjustType === 'DEDUCT' ? -qty : qty),
            balanceAfter: newAvailable,
            recipient: adjustDetails.adjustedBy || 'ANISH',
            department: po.department || 'Store Audit',
            project: po.projectName || 'Audit',
            referenceNo: adjustDetails.referenceNo || `ADJ-${now.getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
            location: li.location || 'Main Store',
            remarks: `[${adjustType === 'DEDUCT' ? 'Stock Reduction / Scrap' : 'Surplus / Physical Audit'}] ${adjustDetails.remarks || 'Stock count adjustment'}`,
            adjustedBy: adjustDetails.adjustedBy || 'ANISH'
        };

        li.stockMovements.push(movement);
        this.saveData(this.data);

        return { success: true, item: li, movement, po };
    }

    // Update storage location / rack / bin
    updateItemLocation(poNo, itemKey, newLocation) {
        const po = this.getPO(poNo);
        if (!po) return { success: false, message: `PO "${poNo}" not found.` };

        const li = po.lineItems.find(i => i.itemKey.toLowerCase() === itemKey.toLowerCase());
        if (!li) return { success: false, message: `Item "${itemKey}" not found.` };

        li.location = (newLocation || 'Main Store').trim();
        this.saveData(this.data);
        return { success: true, item: li };
    }

    // Update COA file attachment
    updateItemCOA(poNo, itemKey, fileName) {
        const po = this.getPO(poNo);
        if (!po) return { success: false, message: `PO "${poNo}" not found.` };

        const li = po.lineItems.find(i => i.itemKey.toLowerCase() === itemKey.toLowerCase());
        if (!li) return { success: false, message: `Item "${itemKey}" not found.` };

        li.coaFile = (fileName || '').trim();
        this.saveData(this.data);
        return { success: true, item: li };
    }

    // Get item stock movements
    getItemStockMovements(poNo, itemKey) {
        const po = this.getPO(poNo);
        if (!po) return [];

        const li = po.lineItems.find(i => i.itemKey.toLowerCase() === itemKey.toLowerCase());
        if (!li) return [];

        return li.stockMovements || [];
    }
}

// Global instance
window.PurchaseData = new PurchaseDataManager();
