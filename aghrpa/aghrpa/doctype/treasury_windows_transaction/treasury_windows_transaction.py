# Copyright (c) 2025, Aly Zoogy and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class TreasurywindowsTransaction(Document):
	
    def before_insert(self):
        self.set_current_datetime()

    def set_current_datetime(self):
      self.transaction_date = frappe.utils.now_datetime()

    def after_insert(self):
        self.new_document()
    	
    def new_document(self):
        doc = frappe.new_doc('Distribution Outlets Transactions')
        doc.transaction_id = self.name
        doc.customer_kind = 1
        doc.customer_id=self.cart_id
        doc.customer_name=self.cart_name
        doc.adress=self.address
        doc.transaction_date = self.transaction_date
        doc.insert()  
   
    @frappe.whitelist()
    def frm_call(self):
        doc = frappe.get_doc('National numbers', self.national_id)
        self.cart_name=doc.customer_name
        self.address=doc.address
