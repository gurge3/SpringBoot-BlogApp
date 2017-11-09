package com.blogProject.dao;

import com.blogProject.model.UserEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

  @Query("from UserEntity u where u.username=:qUsername")
  UserEntity findUserByUsername(@Param("qUsername") String username);

  @Transactional
  @Query("update UserEntity us set us.username=:qUsername, us.password=:qPassword, us.role=:qUserRole where us.id=:qId")
  void updateUser(@Param("qUsername") String username, @Param("qPassword") String password, @Param("qUserRole") String userRole,
                  @Param("qId") Integer id);
}
