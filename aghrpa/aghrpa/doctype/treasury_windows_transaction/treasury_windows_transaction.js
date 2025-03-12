// Copyright (c) 2025, Aly Zoogy and contributors
// For license information, please see license.txt

frappe.ui.form.on("Treasury windows Transaction", {
    national_id: function(frm) {
        	   frm.call({
         			doc: frm.doc,
         			method: 'frm_call',
         			args: {
         				msg: "Hello"
         			},
         			freeze: true,
         			freeze_message: __('Calling frm_call Method'),
         			callback: function(r) {
         				frappe.msgprint(r.message)
                       
         				// frappe.msgprint("Server Side calling Compleated")
    
         				// frm.refresh_field('medication_orders');
         			}
         		});
         	}
});
