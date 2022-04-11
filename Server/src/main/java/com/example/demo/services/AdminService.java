package com.example.demo.services;

import java.util.List;

import com.example.demo.models.Admin;

public interface AdminService {
	List<Admin> getAllAdmins();
	void addAdmin(Admin admin);
	Admin getAdminById(long id);
	void deleteAdminById(long id);
}
