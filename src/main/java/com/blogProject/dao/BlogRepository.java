package com.blogProject.dao;

import com.blogProject.model.BlogEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

@Repository
public interface BlogRepository extends JpaRepository<BlogEntity, Integer> {

  @Modifying
  @Transactional
  @Query("update BlogEntity blog set blog.title=:qTitle, blog.userId=:qUserId," +
          " blog.content=:qContent, blog.pubDate=:qPubDate where blog.id=:qId")
  void updateBlog(@Param("qTitle") String title, @Param("qUserId") int userId, @Param("qContent") String content,
                  @Param("qPubDate") Date pubDate, @Param("qId") int id);


  @Query("from BlogEntity blog where blog.userId=:qUserId")
  List<BlogEntity> findBlogById(@Param("qUserId") int userId);
}
